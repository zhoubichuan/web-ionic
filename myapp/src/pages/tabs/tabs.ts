import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {DemoPage} from '../demo/demo'
import {NewPage} from '../new/new'
import {NewsinfoPage} from '../newsinfo/newsinfo'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root =DemoPage;
  tab5Root =NewPage;
  tab6Root =NewsinfoPage

  constructor() {

  }
}
