import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from './services/room.service';
import { UserService } from './services/user.service';
import { RTCService } from './services/rtc.service';
import { ChatComponent } from './components/chat/chat.component';
import { AuthComponent } from './components/auth/auth.component';
import { MatRippleModule, MatButtonModule, MatSidenavModule, MatInputModule, MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ChatComponent, AuthComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [RoomService, UserService, RTCService],
  exports: [
    AuthComponent
  ]
})
export class WebRTCModule { }
