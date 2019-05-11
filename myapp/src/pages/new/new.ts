import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
// import { HttpService } from "../../providers/http-serve/http-serve";
/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-new",
  templateUrl: "new.html"
})
export class NewPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  doRefresh(eve) {
    this.HttpService.requestData(this.Config.newList, data => {
      this.title = data;
      eve.complete(); //当数据请求完成调用
    });
  }
  doInfinite(eve){
    this.HttpService.requestData(this.Config.newList,
    (data) => {
    this.title = this.title.concat(data);
    eve.complete();
    });
    }
  ionViewDidLoad() {
    console.log("ionViewDidLoad NewPage");
  }
}
