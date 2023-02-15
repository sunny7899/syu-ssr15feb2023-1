import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { FooterModule } from '../footer/footer.module';
// import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NavModule } from '../nav/nav.module';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FooterModule,
    ChatModule,
    // HeaderInnerModule,
    OwlModule,
    NavModule
  ]
})
export class AboutUsModule { }
