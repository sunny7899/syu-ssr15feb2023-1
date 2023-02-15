import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
// import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import {ScrollPanelModule} from 'primeng/scrollpanel';



@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    // HeaderModule,
    FooterModule,
    ChatModule,
    ScrollPanelModule
  ],
  exports:[ExamsComponent]
})
export class ExamsModule { }