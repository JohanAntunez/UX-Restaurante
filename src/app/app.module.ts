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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FormsComponent,
    checkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CdkStepperModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
