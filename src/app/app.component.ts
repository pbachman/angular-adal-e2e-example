import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

const config: adal.Config = {
  tenant: '[your tenant]',
  clientId: '[your clientId]',
  cacheLocation: 'localStorage'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string;

  constructor(
    private service: AdalService) {
    this.service.init(config);
  }

  ngOnInit() {
    // handles the callback, if this is a redirect from Azure
    this.service.handleWindowCallback();

    // checks if the User is authenticated.
    if (!this.service.userInfo.authenticated) {
      this.service.login();
    } else {
      if (this.service.userInfo) {
        this.username = this.service.userInfo.userName;
        console.log('username ' + this.service.userInfo.userName);
        console.log('name: ' + this.service.userInfo.profile.name);
      }
    }
  }
}
