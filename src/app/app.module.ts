import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { FatturaComponent } from './component/fattura/fattura.component';
import { ClientComponent } from './component/client/client.component';





const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'accedi',
    component: LoginComponent,
  },
  {
    path: 'registrati',
    component: RegisterComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FatturaComponent,
    ClientComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,     //
      useClass: TokenInterceptor,   // l'interceptor esiste ed è esposto a livello i app module e qualunque chiamata http passerà da lui
      multi: true     
    }
    
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
