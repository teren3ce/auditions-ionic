import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AvaterComponent } from './avater/avater';
import { CheckedAvaterComponent } from './checked-avater/checked-avater';
import { TimeNotificationComponent } from './time-notification/time-notification';
import { AuditionCardComponent } from './audition-card/audition-card';
import { ApplicationCardComponent } from './application-card/application-card';
import { SelectCardComponent } from './select-card/select-card';
import { CommonModule } from '@angular/common';
import { ApplicationItemComponent } from './application-item/application-item';
import { PopoverMenuComponent } from './popover-menu/popover-menu';
import { MessageListComponent } from './message-list/message-list';
@NgModule({
    declarations: [
        AvaterComponent,
        CheckedAvaterComponent,
        TimeNotificationComponent,
        AuditionCardComponent,
        ApplicationCardComponent,
        SelectCardComponent,
        ApplicationItemComponent,
        PopoverMenuComponent,
    MessageListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AvaterComponent,
        CheckedAvaterComponent,
        TimeNotificationComponent,
        AuditionCardComponent,
        ApplicationCardComponent,
        SelectCardComponent,
        ApplicationItemComponent,
        PopoverMenuComponent,
    MessageListComponent
    ],
    entryComponents: [
        PopoverMenuComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
