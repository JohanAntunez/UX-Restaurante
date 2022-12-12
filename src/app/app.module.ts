import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import {FormsComponent} from './components/forms/forms.component';
import {checkoutComponent} from './components/checkout/checkout.component'
import {CdkStepperModule} from '@angular/cdk/stepper';
import {ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatIconModule} from '@angular/material/icon';
import { Error404Component } from './components/error404/error404.component';
import { Error403Component } from './components/error403/error403.component';
import { Error500Component } from './components/error500/error500.component';
import { DetailsComponent } from './components/details/details.component';
import { InboxEmailComponent } from './components/inbox-email/inbox-email.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FormsComponent,
    checkoutComponent,
    Error404Component,
    Error403Component,
    Error500Component,
    DetailsComponent,
    InboxEmailComponent,
    SidebarComponent,
    PricingComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    ChatComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CdkStepperModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatIconModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
