import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeConRoutingModule } from './college-con-routing.module';
import { CollegeConComponent } from './college-con.component';

import { FooterModule } from '../footer/footer.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { TabViewModule } from 'primeng/tabview';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryModule } from 'ng-gallery';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavModule } from '../nav/nav.module';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from '../chat/chat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CollegeConComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CollegeConRoutingModule,
    ChatModule,
    FooterModule,
    HeaderInnerModule,
    TabViewModule,
    NgxGalleryModule,
    OwlModule,
    AccordionModule,
    NgbCollapseModule,
    // GalleriaModule,
    NavModule,
    DialogModule,
    HttpClientModule

  ],
  providers: [GalleryModule],
})
export class CollegeConModule { }
