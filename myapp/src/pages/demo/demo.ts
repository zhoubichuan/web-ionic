import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ContactPage } from "../contact/contact";
/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-demo",
  templateUrl: "demo.html"
})
export class DemoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  pushBut() {
    this.navCtrl.push(ContactPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad DemoPage");
  }
}
