import { Component, OnInit } from '@angular/core';
import { IConversation, ISettings, ApiService } from 'src/app/api/api.service';
import { SettingsComponent } from '../../dialogs/settings/settings.component';
import { MatDialog } from '@angular/material';
import { AddUserComponent } from '../../dialogs/add-user/add-user.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private conversations = Array<IConversation>();
  private filteredConversations = Array<IConversation>();

  private settings: ISettings;

  private currentConversation: IConversation = {
    user: null,
    messages: []
  };

  private selectedUserId: string;

  constructor(private apiService: ApiService, private dialog: MatDialog) { 
    this.settings = this.apiService.getSavedSettings();

    this.apiService.getConversation().subscribe(conversation => {
      this.currentConversation = conversation;
    });

    this.apiService.listenToConversationsChange().subscribe(conversations => {
      this.conversations = conversations;
      this.assignCopy();

      if (!this.selectedUserId && this.conversations.length > 0) {
        console.log(this.conversations);
        this.apiService.setPeerId(this.conversations[0].user.id);
        this.selectedUserId = this.conversations[0].user.id;
      }
    });
  }

  ngOnInit() {

  }

  private openSettingsDialog() {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.settings = this.apiService.getSavedSettings();
    });
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '300px',
    });
  }

  private assignCopy() {
    this.filteredConversations = Object.assign([], this.conversations);
  }

  private filterConversations(name: string) {
    if (!name) {
      this.assignCopy();
    }

    this.filteredConversations = Object.assign([], this.conversations).filter(
      (item: IConversation) => item.user.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }

  private selectUser(id: string) {
    this.apiService.setPeerId(id);

    this.selectedUserId = id;
  }
}
