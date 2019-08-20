import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ICall, ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<CallComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ICall) { }

  ngOnInit() {
  }

  private respondCall(response: string) {
    this.apiService.respondToCall(response);

    this.dialogRef.close();
  }

}
