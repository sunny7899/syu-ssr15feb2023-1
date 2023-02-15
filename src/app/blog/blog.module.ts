import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { HeaderInnerModule } from '../header-inner/header-inner.module';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FooterModule,
    // HeaderInnerModule,
    CarouselModule,
    ChatModule
  ],
  exports:[BlogComponent]
})
export class BlogModule { }
