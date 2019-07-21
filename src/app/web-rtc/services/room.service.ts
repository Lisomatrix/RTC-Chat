import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignalingService } from './signaling.service';
import { User } from './user.service';

export interface Room {
  id: string;
  members: Array<User>,
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms = new BehaviorSubject<Array<Room>>([]);

  private currentRoom: Room;

  constructor(private signaling: SignalingService) {
    this.signaling.connect();
    this.signaling.emit({ event: 'rooms', data: { } });
    this.signaling.onEvent('new_room').subscribe((data: Room) => this.addRoom(data));
    this.signaling.onEvent('room_created').subscribe(() => {});
  }

  public joinRoom(id: string) {
    this.signaling.emit({ event: 'join_room', data: { id } });

    const currentRooms = this.rooms.getValue();

    currentRooms.forEach(room => {
      this.currentRoom = room;
    });
  }

  public getRooms(): Observable<Array<Room>> {
    return this.rooms.asObservable();
  }

  public createRoom(name: string): void {
    this.signaling.emit({ event: 'new_room', data: { name } });
  }

  public getCurrentRoom() {
    return this.currentRoom;
  }

  private addRoom(room: Room): void {
    const newRooms = this.rooms.getValue();
    newRooms.push(room);

    this.rooms.next(newRooms);
  }
}
