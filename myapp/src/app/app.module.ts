import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { DemoPage } from "../pages/demo/demo";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { NewPage } from "../pages/new/new";
import { NewsinfoPage } from "../pages/newsinfo/newsinfo";

import {HttpClientModule} from '@angular/common/http'
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ConfigProvider } from '../providers/config/config';
import { HttpServeProvider } from '../providers/http-serve/http-serve';
import { StorageProvider } from '../providers/storage/storage';
import { CKEditorModule } from "ng2-ckeditor";
@NgModule({
  declarations: [
    MyApp,
    DemoPage,
    AboutPage,
    ContactPage,
    HomePage,
    NewPage,
    NewsinfoPage,
    TabsPage
  ],
  imports: [BrowserModule,CKEditorModule,HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DemoPage,
    AboutPage,
    ContactPage,
    HomePage,
    NewPage,
    NewsinfoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigProvider,
    HttpServeProvider,
    StorageProvider
  ]
})
export class AppModule {}
