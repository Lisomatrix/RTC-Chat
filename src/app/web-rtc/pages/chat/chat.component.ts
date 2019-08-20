import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room, RoomService } from '../../services/room.service';
import { ApiService, IConversation, ISettings } from 'src/app/api/api.service';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from '../../dialogs/add-user/add-user.component';
import { SettingsComponent } from '../../dialogs/settings/settings.component';
import { CallComponent } from '../../dialogs/call/call.component';

interface Message {
  sentByMe: boolean;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('audioOption', { static: true })
  private audioPlayerRef: ElementRef<HTMLAudioElement>;

  @ViewChild('callAudio', { static: true })
  private callAudioPlayerRef: ElementRef<HTMLAudioElement>;

  @ViewChild('remoteVideo', { static: true })
  private remoteVideoRef: ElementRef<HTMLVideoElement>;

  @ViewChild('localVideo', { static: true })
  private localVideoRef: ElementRef<HTMLVideoElement>;

  @ViewChild('videosContainer', { static: true })
  private videosContainer: ElementRef<HTMLDivElement>;

  @ViewChild('scroll', { static: true })
  private myScrollContainer: ElementRef;

  private isFullScreen = false;
  private showingStream = false;

  private messages = Array<Message>();

  private dragPosition = {x: 0, y: 0};

  private selectedUserId = '';
  private userId = localStorage.getItem('userId');

  private firstAudio = false;

  private settings: ISettings;

  private currentConversation: IConversation = {
    user: null,
    messages: []
  };

  constructor(private apiService: ApiService, private dialog: MatDialog) {
    this.settings = this.apiService.getSavedSettings();
  }

  ngOnInit() {
    this.apiService.listenToCallAccept().subscribe();

    this.apiService.isConnectedToPeer()
    .subscribe(async connected => {
        this.showStreaming(connected).then();
    });

    this.apiService.getConversation().subscribe(conversation => this.currentConversation = conversation);

    this.apiService.listenToMessageReceived().subscribe(changed => {
      if (changed && this.settings && this.settings.isSoundActivated) {
        this.audioPlayerRef.nativeElement.play().then();
      }
    });

    this.scrollToBottom();

    this.apiService.listenToCalls().subscribe(call => {
      this.callAudioPlayerRef.nativeElement.loop = true;
      this.callAudioPlayerRef.nativeElement.play();
      this.dialog.open(CallComponent, {
        width: '400px',
        data: call
      }).afterClosed().subscribe(() => {
        this.callAudioPlayerRef.nativeElement.loop = false;
        this.callAudioPlayerRef.nativeElement.pause();
        this.callAudioPlayerRef.nativeElement.currentTime = 0;
      });
    });
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
  }

  private scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) { }
  }

  private sendMessage(messageInput: HTMLInputElement) {
    const message = messageInput.value;
    messageInput.value = '';

    if (message.trim() !== '' && this.currentConversation.user) {
      this.apiService.sendMessage(message);
    }
  }

  private startVideoCall() {
    this.apiService.startCall({ video: true, audio: true });
  }

  private startAudioCall() {
    this.apiService.startCall({ video: false, audio: true });
  }

  private toggleMedia(options: string) {
    if (options === 'video') {
      this.apiService.toggleVideoOrAudio({ video: true, audio: false });
    } else if (options === 'audio') {
      this.apiService.toggleVideoOrAudio({ video: false, audio: true });
    }
  }

  private async showStreaming(connected: boolean) {
    if (connected) {
      const streams = await this.apiService.getStreams();
      this.localVideoRef.nativeElement.srcObject = streams.local;
      this.remoteVideoRef.nativeElement.srcObject = streams.remote;
      this.videosContainer.nativeElement.style.display = 'flex';
    } else {
      this.videosContainer.nativeElement.style.display = 'none';
    }
  }

  private toggleFullscreen() {

    if (!this.isFullScreen) {
      this.dragPosition = { x: 0, y: 0 };
      this.videosContainer.nativeElement.classList.add('videos-container-fullscreen');
    } else {
      this.videosContainer.nativeElement.classList.remove('videos-container-fullscreen');
    }

    this.isFullScreen = !this.isFullScreen;
  }
}
