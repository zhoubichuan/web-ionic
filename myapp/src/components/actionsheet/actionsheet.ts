import { Component } from '@angular/core';

/**
 * Generated class for the ActionsheetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'actionsheet',
  templateUrl: 'actionsheet.html'
})
export class ActionsheetComponent {

  text: string;

  constructor() {
    console.log('Hello ActionsheetComponent Component');
    this.text = 'Hello World';
  }

}
