import { NgModule } from '@angular/core';
import { AvaterComponent } from './avater/avater';
import { CheckedAvaterComponent } from './checked-avater/checked-avater';
import { TimeNotificationComponent } from './time-notification/time-notification';
import { SlideCardComponent } from './slide-card/slide-card';
import { AuditionCardComponent } from './audition-card/audition-card';
import { ApplicationCardComponent } from './application-card/application-card';
import { SelectCardComponent } from './select-card/select-card';
@NgModule({
	declarations: [AvaterComponent,
    CheckedAvaterComponent,
    TimeNotificationComponent,
    SlideCardComponent,
    AuditionCardComponent,
    ApplicationCardComponent,
    SelectCardComponent],
	imports: [],
	exports: [AvaterComponent,
    CheckedAvaterComponent,
    TimeNotificationComponent,
    SlideCardComponent,
    AuditionCardComponent,
    ApplicationCardComponent,
    SelectCardComponent]
})
export class ComponentsModule {}
