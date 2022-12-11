import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { Error404Component } from './components/error404/error404.component';
import { Error403Component } from './components/error403/error403.component';
import { Error500Component } from './components/error500/error500.component';
import { DetailsComponent } from './components/details/details.component';
import { MatIconModule} from '@angular/material/icon';
import { InboxEmailComponent } from './components/inbox-email/inbox-email.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Error404Component,
    Error403Component,
    Error500Component,
    DetailsComponent,
    InboxEmailComponent,
    SidebarComponent,
    PricingComponent,
    LoginComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
