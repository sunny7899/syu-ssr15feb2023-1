import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogContentRoutingModule } from './blog-content-routing.module';
import { BlogContentComponent } from './blog-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [BlogContentComponent],
  imports: [
    CommonModule,
    BlogContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    ChatModule
  ]
})
export class BlogContentModule { }
