import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { checkoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { Error403Component } from './components/error403/error403.component';
import { Error404Component } from './components/error404/error404.component';
import { Error500Component } from './components/error500/error500.component';
import { InboxEmailComponent } from './components/inbox-email/inbox-email.component';
import { LoginComponent } from './components/login/login.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { ListBebidasComponent } from './components/list-bebidas/list-bebidas.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'forms',
    component: FormsComponent,
  },
  { path: 'list',
    component: ProductListComponent,
  },
  { path: 'bebidas',
    component: ListBebidasComponent,
  },
  { path: 'login',
    component: LoginComponent,
  },
  { path: 'checkout',
    component: checkoutComponent,
  },
  { path: 'chat',
    component: ChatComponent
  },
  { path: 'userProfile',
    component: UserProfileComponent,
  },
  { path: 'register',
    component: RegisterComponent,
  },
  { path: 'inbox',
    component: InboxEmailComponent,
  },
  { path: 'check',
    component: checkoutComponent,
  },
  { path: 'detail',
    component: DetailsComponent,
  },
  { path: 'pricing',
    component: PricingComponent,
  },
  { path: 'error404',
    component: Error404Component,
  },
  { path: 'error403',
    component: Error403Component,
  },
  { path: 'error500',
    component: Error500Component,
  },
  { path: 'home',
  component: LandingComponent,
  },
  { path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
