import { Injectable } from '@angular/core';
import { WebSocketService } from '../websocket/web-socket.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export class Room {
  id: string;
  members: Array<string>;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomsSubject = new BehaviorSubject<Array<Room>>([]);

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.connect();

    this.webSocketService.onEvent('new_room').subscribe(this.handleNewRoom);
    this.webSocketService.onEvent('room_created').subscribe(this.handleNewRoom);
  }

  public getRoom() {
    return this.roomsSubject.getValue();
  }

  public async listenToRoomJoined() {
    return this.webSocketService.onEvent('room_joined')
    .pipe(map((joinedRoom: Room) => {
      const rooms = this.roomsSubject.getValue();

      for (let i = 0, n = rooms.length; i < n; i++) {
        if (rooms[i].id === joinedRoom.id) {
          rooms[i] = joinedRoom;
          break;
        }
      }

      return joinedRoom;
    }));
  }

  private handleNewRoom(room: Room) {
    const rooms = this.roomsSubject.getValue();
    rooms.push(room);

    this.roomsSubject.next(rooms);
  }
}
