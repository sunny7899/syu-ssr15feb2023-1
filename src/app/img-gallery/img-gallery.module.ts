import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgGalleryRoutingModule } from './img-gallery-routing.module';
import { ImgGalleryComponent } from './img-gallery.component';


import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [ImgGalleryComponent],
  imports: [
    CommonModule,
    ImgGalleryRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    TabViewModule,
    ChatModule
  ]
})
export class ImgGalleryModule { }
