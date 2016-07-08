import {ViewChild} from '@angular/core';
import {App, Platform, MenuController} from 'ionic-angular';
import {nipplejs} from '../www/lib/nipplejs/dist/nipplejs.js';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {RcCarRemote1Page} from './pages/rc-car-remote-1/rc-car-remote-1';
import {RcCarRemote2Page} from './pages/rc-car-remote-2/rc-car-remote-2';
import {RcCarRemote3Page} from './pages/rc-car-remote-3/rc-car-remote-3';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  queries: {
    nav: new ViewChild('content')
  }
})
class MyApp {
  static get parameters() {
    return [[Platform], [MenuController]];
  }

  constructor(platform, menu) {
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Rc Car Remote test 1', component: RcCarRemote1Page },
      { title: 'Rc Car Remote test 2', component: RcCarRemote2Page },
      { title: 'Rc Car Remote test 3', component: RcCarRemote3Page },
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
