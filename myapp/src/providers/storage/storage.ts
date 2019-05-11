import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
    
    console.log('Hello StorageProvider Provider');
  }
  store(key,value){
localStorage.setItem(key,value);
}
//获取：
obtain(key){
localStorage.getItem(key);
}
//删除：
remove(key){
localStorage.removeItem(key);
}
//全部清除：
clearAll(){
localStorage.clear();
}

}
