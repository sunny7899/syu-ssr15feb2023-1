import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    HeaderInnerModule,
    FooterModule,
    ChatModule
  ]
})
export class ServicesModule { }
