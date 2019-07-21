import { Component, OnInit } from '@angular/core';
import { RTCService } from './web-rtc/services/rtc.service';
import { RoomService } from './web-rtc/services/room.service';
import { UserService } from './web-rtc/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chat';

  constructor() {
  }

  ngOnInit(): void {
    
  }
}
