import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RTCService } from './rtc.service';
import { WebSocketService } from './web-socket.service';
import { SignalingService } from './signaling.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ RTCService, WebSocketService, SignalingService ]
})
export class SignalingModule { }
