import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './web-rtc/pages/auth/auth.component';
import { ChatComponent } from './web-rtc/pages/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
