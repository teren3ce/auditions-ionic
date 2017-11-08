import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditionsPage } from './auditions';

@NgModule({
  declarations: [
    AuditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditionsPage),
  ],
})
export class AuditionsPageModule {}
