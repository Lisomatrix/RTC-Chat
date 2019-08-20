import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { Observable } from "rxjs";
import { SignalRService } from '../../services/signal-r.service';

@Component({
  selector: "rtc-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  private error = "";

  constructor(
    private authenticationService: AuthenticationService,
    private user: UserService,
    private router: Router,
    private signalRService: SignalRService,
  ) {
    this.signalRService.connect();
  }

  ngOnInit() {}

  private createUser(username: string, password: string) {
    this.handleResult(this.authenticationService.register(username, password));
  }

  private logIn(username: string, password: string) {
    this.handleResult(
      this.authenticationService.authenticate(username, password)
    );
  }

  private handleResult(
    result: Observable<{ message: string; success: boolean }>
  ) {
    result.subscribe(message => {
      this.error = message.message;

      if (message.success) {
        this.router.navigateByUrl("/chat");
      }
    });
  }
}
