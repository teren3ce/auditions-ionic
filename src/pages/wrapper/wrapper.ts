import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, PopoverController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';
import { NewAuditionPage } from '../new-audition/new-audition';
import { ConversationPage } from '../conversation/conversation';

@Component({
  selector: 'page-wrapper',
  templateUrl: 'wrapper.html',
})
export class WrapperPage {

  @ViewChild('tabslide') tabslide: Slides;
  @ViewChild('cardslide') cardslide: Slides;


  tabs: Array<{ title: string, class: string, index: number }>;
  currentTab: number;
  isTalent: boolean;
  audSorting: string;
  messageMenuList: Array<{ text: string, icon: string }>;
  selectMessageMenu: string = 'Recent';
  selectMessageMenuIcon: string = 'chat-bubble';

  showAddBtn: boolean;
  addBtnPage: any = NewAuditionPage;

  //loaded data
  applications: Array<string>;
  messages: Array<string>;
  msgDate: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.tabs = [
      {
        title: "Home",
        class: 'home',
        index: 0,
      }, {
        title: "Auditions and Jobs",
        class: 'audition',
        index: 1,
      }, {
        title: "Messages",
        class: 'message',
        index: 2,
      }]
    this.currentTab = 2;

    this.applications = [
      'Sample title for auditions',
      'Sample title for auditions 2',
      'Sample title for auditions 3',
      'Sample title for auditions 4',
      'Sample title for auditions 5'
    ]

    this.messages = [
      'Mattew Omeike',
      'Joy Chukwu',
      'Nixon Dev',
      'Becky HR',
      'Karen Sings '
    ]
    this.msgDate = new Date();

    this.messageMenuList = [
      {
        text: "Recent",
        icon: "chat-bubble"
      },
      {
        text: "Favourites",
        icon: "favorite"
      },
      {
        text: "Groups",
        icon: "users"
      },
      {
        text: "Applications",
        icon: "library"
      }
    ]

    this.isTalent = this.navParams.get('type');
    this.isTalent = true;
  }

  slideChanged() {
    this.currentTab = this.tabslide.getActiveIndex();
  }

  segmentChanged() {
    this.tabslide.slideTo(this.currentTab);
  }
  openLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
  homeSlideChange(evt: Slides) {
  }

  openMessageMenu(evt) {
    let popover = this.popoverCtrl.create(PopoverMenuComponent,
      {
        list: this.messageMenuList,
        selected: this.selectMessageMenu
      });
    popover.present({
      ev: evt,
    });
    popover.onDidDismiss((data) => {
      this.selectMessageMenu = data.selected;
      this.selectMessageMenuIcon = data.icon;
    })
  }

  openConversaion(item) {
    this.navCtrl.push(ConversationPage, {
      message: item
    });
  }

  ngAfterViewInit() {
    this.cardslide.freeMode = true;
  }
}
