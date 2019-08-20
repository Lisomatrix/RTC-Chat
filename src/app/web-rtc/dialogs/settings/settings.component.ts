import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService, ISettings } from 'src/app/api/api.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private name = '';
  private soundActive = true;
  private notificationActive = false;
  private loading = 'hidden';
  private isNameInUse = false;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    const user = this.apiService.getUser();

    this.name = user.name;

    const settings = this.apiService.getSavedSettings();

    this.soundActive = settings.isSoundActivated;
    this.notificationActive = settings.isNotificationActivated;
  }

  private onSaveClick(notificationCheck: boolean, soundCheck: boolean, username: string) {

    const settings: ISettings = {
      isSoundActivated: soundCheck,
      isNotificationActivated: notificationCheck
    };

    localStorage.setItem('settings', JSON.stringify(settings));

    if (this.name !== username && username.trim() !== '') {
      settings.name = username;
      this.loading = 'visible';

      this.apiService.listenToUsernameChange().subscribe((change) => {
        if (change.success) {
          this.apiService.changeNameConfirm(username);
          this.dialogRef.close(settings);
        } else {
          this.isNameInUse = true;
        }
      });

      this.apiService.changeUsername(username);
    } else {
      this.dialogRef.close(settings);
    }
  }

  private onCancelClick() {
    this.dialogRef.close();
  }
}
