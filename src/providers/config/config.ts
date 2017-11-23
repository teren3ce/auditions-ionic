import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigProvider {

  constructor(public http: Http) { }

  private _apiUrl: String = 'https://salty-coast-27930.herokuapp.com';


  public getUrl(type?: string): string {
    return this._apiUrl.toString();
  }


  public getToken(): any {
    const _token = null;
    if (_token !== null && _token !== '') {
      return JSON.parse(_token);
    }
    return null;
  }

  public setToken(value: any) {
    return JSON.parse('');
  }

  public tokenStatus() {

  }
}
