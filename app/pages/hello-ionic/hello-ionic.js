import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
    console.log('console log test - Hello Ionic page');
  }
}
