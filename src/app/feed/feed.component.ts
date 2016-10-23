// feed.component.js
import { Component, View } from 'angular2/core';
import { Router, RouterLink, ComponentInstruction, CanActivate } from 'angular2/router';
import { CORE_DIRECTIVES, NgIf } from 'angular2/common';
import { DataService } from '../shared/services/data.service';
import { DashboardLayoutComponent } from '../dashboard_layout/dashboard_layout.component';
import { checkAuth } from '../auth_module/auth/check_auth';
import { Auth } from '../auth_module/auth/auth';
import { Sensor1Component } from './sensor1.component'

@Component({
  selector: 'feed',
  inputs: ['sensor1'],
  providers: [DataService]
})

@View({
  templateUrl: 'src/app/feed/feed.component.html',
  directives: [DashboardLayoutComponent, NgIf, Sensor1Component]
})

@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  return checkAuth(next, previous);
})

export class FeedComponent {

  constructor(private _router: Router, private _auth: Auth) {
  }
}
