import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room, RoomService } from '../../services/room.service';
import { RTCService } from '../../services/rtc.service';
import { EncryptionService } from '../../services/encryption.service';
import { User, UserService } from '../../services/user.service';
import { SignalRService } from '../../services/signal-r.service';

interface Message {
  sentByMe: boolean;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('audioOption', { static: true })
  private audioPlayerRef: ElementRef<HTMLAudioElement>;

  @ViewChild('remoteVideo', { static: true })
  private remoteVideoRef: ElementRef<HTMLVideoElement>;

  @ViewChild('localVideo', { static: true })
  private localVideoRef: ElementRef<HTMLVideoElement>;

  @ViewChild('videosContainer', { static: true })
  private videosContainer: ElementRef<HTMLDivElement>;

  private isFullScreen = false;
  private showingStream = false;

  private messages = Array<Message>();

  private users = Array<User>();
  
  private RoomsSubject = new BehaviorSubject<Array<Room>>([]);

  private dragPosition = {x: 0, y: 0};

  constructor(private signalRService: SignalRService, private cdr: ChangeDetectorRef, private rooms: RoomService, private rtcService: RTCService, private userService: UserService) {
    this.rooms.getRooms().subscribe(x => this.RoomsSubject.next(x));
    this.userService.getUsers().subscribe(x => this.users = x);

    this.rtcService.getConnectedObservable().subscribe(connected => this.showStreaming(connected));
    this.signalRService.connect();
  }

  ngOnInit() {
    this.rtcService.getPeerMessages().subscribe(peerMessage => {
      this.messages.push({ sentByMe: false, message: peerMessage.message });
      this.audioPlayerRef.nativeElement.play();
    });

    this.signalRService.getUsers().subscribe(users =>  {
      console.log(users);
      this.users = users;
    })
  }

  private sendMessage(messageInput: HTMLInputElement) {
    const message = messageInput.value;
    messageInput.value = '';

    if (message.trim() !== '') {
      this.rtcService.sendPeerMessage({ message });
      this.messages.push({ sentByMe: true, message });
    }
  }

  private createRoom() {
    this.rooms.createRoom('New Room');
  }

  private joinRoom(roomId: string) {
    this.rooms.joinRoom(roomId);
  }

  private startVideoCall() {
    this.rtcService.toggleVideo();
    this.rtcService.toggleAudio();
  }

  private startAudioCall() {
    this.rtcService.toggleAudio();
  }

  private toggleVideo() {
    this.rtcService.toggleVideo();
  }

  private showStreaming(connected: boolean) {
    if (connected) {
      this.rtcService.showVideo(this.localVideoRef.nativeElement, this.remoteVideoRef.nativeElement);
      this.videosContainer.nativeElement.style.display = 'flex';
    } else {
      this.videosContainer.nativeElement.style.display = 'none';
    }
  }

  private toggleFullscreen() {

    if (!this.isFullScreen) {
      this.dragPosition = { x:0, y: 0 };
      this.videosContainer.nativeElement.classList.add('videos-container-fullscreen');
    } else {
      this.videosContainer.nativeElement.classList.remove('videos-container-fullscreen');
    }

    this.isFullScreen = !this.isFullScreen;
  }
}
