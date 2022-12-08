import { InboxEmailComponent } from './components/inbox-email/inbox-email.component';
import { DetailsComponent } from './components/details/details.component';
import { Error500Component } from './components/error500/error500.component';
import { Error403Component } from './components/error403/error403.component';
import { Error404Component } from './components/error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'error403',
    component: Error403Component
  },
  {
    path:'error404',
    component: Error404Component
  },
  {
    path:'error500',
    component: Error500Component
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'inboxEmail',
    component: InboxEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
