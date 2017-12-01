import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, PopoverController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';
import { NewAuditionPage } from '../new-audition/new-audition';
import { ConversationPage } from '../conversation/conversation';
import { ConversationGroupPage } from '../conversation-group/conversation-group';
import { NewGroupPage } from '../new-group/new-group';
import { NotificationsPage } from '../notifications/notifications';

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
    this.currentTab = 0;

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

    this.showAddBtn = false;
  }

  private _showAction() {
    if (this.currentTab == 1) {
      this.showAddBtn = true;
      this.addBtnPage = NewAuditionPage;
    }
    else if (this.currentTab == 2 && this.selectMessageMenu == 'Groups') {
      this.showAddBtn = true;
      this.addBtnPage = NewGroupPage;
    }
    else {
      this.showAddBtn = false;
      this.addBtnPage = NewAuditionPage;
    }
  }

  slideChanged() {
    this.currentTab = this.tabslide.getActiveIndex();
    this._showAction();
  }

  segmentChanged() {
    this.tabslide.slideTo(this.currentTab);
    this._showAction();
  }
  openLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  openMessageMenu(evt) {
    let popover = this.popoverCtrl.create(PopoverMenuComponent,
      {
        list: this.messageMenuList,
        selected: this.selectMessageMenu
      });
    popover.present({
      ev: evt
    });
    popover.onDidDismiss((data) => {
      if (data != null) {
        this.selectMessageMenu = data.selected;
        this.selectMessageMenuIcon = data.icon;

        if (this.selectMessageMenu == "Groups") {
          this.showAddBtn = true;
          this.addBtnPage = NewGroupPage;
        }
        else {
          this.showAddBtn = false;
          this.addBtnPage = NewAuditionPage;
        }
      }
    })
  }

  openConversaion(item) {
    this.navCtrl.push(ConversationPage, {
      message: item
    });
  }

  openGroup(item) {
    this.navCtrl.push(ConversationGroupPage, {
      message: item
    });
  }

  goToAction() {
    this.navCtrl.push(this.addBtnPage);
  }

  openNotifications() {
    this.navCtrl.push(NotificationsPage);
  }

  ngAfterViewInit() {
    this.cardslide.freeMode = true;
  }
}
