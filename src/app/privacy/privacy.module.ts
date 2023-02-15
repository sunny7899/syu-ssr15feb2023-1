import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    ChatModule
  ]
})
export class PrivacyModule { }
