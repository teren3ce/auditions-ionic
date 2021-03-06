import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WrapperPage } from '../pages/wrapper/wrapper';
import { PostedAuditionsPage } from '../pages/posted-auditions/posted-auditions';
import { ApplicationsPage } from '../pages/applications/applications';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WrapperPage;

  pages: Array<{ title: string, component: any }>;
  helpPages: Array<{ title: string, url: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: WrapperPage },
      { title: 'Posted Auditions', component: PostedAuditionsPage },
      { title: 'Applications', component: ApplicationsPage },
      { title: 'Settings', component: SettingsPage },
    ];

    this.helpPages = [
      { title: 'Help', url: "http://talent2celeb.com" },
      { title: 'Feedback', url: "http://talent2celeb.com" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openUrl(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.url);
  }
}
