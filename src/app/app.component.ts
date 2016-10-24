// app.component.js
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction, CanActivate } from 'angular2/router';
import { CustomRouterOutlet } from './shared/directives/custom-router-outlet';
import { checkAuth } from './auth_module/auth/check_auth';
import { Auth } from './auth_module/auth/auth.service';
import { LoginComponent } from './auth_module/login/login.component';
import { SignupComponent } from './auth_module/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';


@Component({
    selector: 'app-container',
    providers: [ Auth ],
    template: '<custom-router-outlet></custom-router-outlet>',
    directives: [CustomRouterOutlet],
})
@RouteConfig([
    { path: '/home', as: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/feed', as: 'Feed', component: FeedComponent},
    { path: '/login', as: 'Login', component: LoginComponent },
    { path: '/signup', as: 'Signup', component: SignupComponent },
    { path: '/**', redirectTo: ['Home'] }
])
export class AppComponent {


    constructor(private auth: Auth) {
    }


}
