import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetPage } from './pet';

@NgModule({
  declarations: [
    PetPage,
  ],
  imports: [
    IonicPageModule.forChild(PetPage),
  ],
})
export class PetPageModule {}
