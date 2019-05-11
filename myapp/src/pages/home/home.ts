import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,publick: user_info_name: string = "";
    Publick: user_info_password = "";) {

  }
  GoLogout(){
    console.log("用户名："+user_info_name);
    console.log("密码："+user_info_password);
    }
  GoLogIn(){
    console.log("用户名："+this.user_info_name);
    console.log("密码："+this.user_info_password);
    this.storage.store(‘user_info_name’:this.user_info_name);
    this.storage.store(‘user_info_password’:this.user_info_passw
    ord);
    }
    obtion(){
      this.user_info_name = this.obtion(‘user_info_name’);
      this.user_info_password = this.obtion("user_info_password");
      }

}
