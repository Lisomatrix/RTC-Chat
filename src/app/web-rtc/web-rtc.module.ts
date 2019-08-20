import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from './services/room.service';
import { UserService } from './services/user.service';
import { RTCService } from './services/rtc.service';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MatProgressSpinnerModule, MatAutocompleteModule, MatCheckboxModule, MatDialogModule, MatRippleModule, MatButtonModule, MatSidenavModule, MatInputModule, MatCardModule, MatTooltipModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { APIModule } from '../api/api.module';
import { AddUserComponent } from './dialogs/add-user/add-user.component';
import { SettingsComponent } from './dialogs/settings/settings.component';
import { CallComponent } from './dialogs/call/call.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [ ChatComponent, AuthComponent, AddUserComponent, SettingsComponent, CallComponent, SidebarComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule,
    APIModule
  ],
  entryComponents: [ CallComponent, AddUserComponent, SettingsComponent ],
  providers: [ RoomService, UserService, RTCService ],
  exports: [
    AuthComponent
  ]
})
export class WebRTCModule { }
