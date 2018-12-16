import { Component } from '@angular/core';

import { TunesPage } from '../tunes/tunes';
import { ViewsPage } from '../views/views';
import { HomePage } from "../home/home";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TunesPage;
  tab3Root = ViewsPage;

  constructor() {

  }
}
