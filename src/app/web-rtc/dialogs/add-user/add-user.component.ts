import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from 'src/app/api/api.service';
import { FormControl } from '@angular/forms';
import { isArray } from 'util';
import { User } from 'src/app/api/users/users.service';

export interface IAddUserData {
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private nameControl = new FormControl();

  private options = new Array<User>();

  private user: User;

  ngOnInit(): void {

  }

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAddUserData) {

    this.apiService.listenToUserSearch().subscribe(user => {

      if ((user as any).result) {
        // @ts-ignore
        this.options = [{ name: 'No users found. ' }];

        return;
      }

      if (isArray(user)) {
        const users = user as User[];

        const filteredOptions = [];

        users.forEach(option => {
          if (!this.isUserAlreadyFriend(option.id)) {
            filteredOptions.push(option);
          }
        });

        this.options = filteredOptions;

      } else {
        this.options = [user as User];
      }
    });

    this.nameControl.valueChanges.subscribe((name: string) => {
      if (name.length >= 3) {
        this.apiService.searchUser({ name });
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick() {
    const name = this.nameControl.value;

    if (name) {

      this.options.forEach(option => {
        if (option.name === name) {
          this.apiService.addFriend(option.id);
        }
      });
    }

    this.dialogRef.close();
  }

  private isUserAlreadyFriend(userId: string) {

    const thisUser = this.apiService.getUser();

    if (thisUser.friends) {
      thisUser.friends.forEach(friendId => {
        if (friendId === userId || userId === friendId) {
          return true;
        }
      });
    } else if (thisUser.id === userId) {
      return true;
    }

    return false;
  }
}
