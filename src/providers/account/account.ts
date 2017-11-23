import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { ConfigProvider } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountProvider {

  constructor(public http: HTTP, private config: ConfigProvider) { }

  private getToken() {
    return ''; // update and move to config
  }
  login(email, password) {
    return this.http.get(this.config.getUrl() + '/auth/login',
      {
        email: email,
        password: password
      }, {})
      .then(data => {
        console.log(data);

      })
      .catch(error => {
        console.log(error);

      });
  }

  loginStatus() {
    return this.http.get(this.config.getUrl() + '/auth/check_login', {}, {
      'Authorization': this.getToken()
    })
      .then(data => {
        console.log(data);

      })
      .catch(error => {
        console.log(error);

      });
  }

  refreshToken() {
    return this.http.get(this.config.getUrl() + '/auth/refresh_token', {
      access_token: this.getToken()
    }, {})
      .then(data => {
        console.log(data);

      })
      .catch(error => {
        console.log(error);

      });
  }

}
