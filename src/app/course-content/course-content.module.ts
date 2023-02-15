import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseContentRoutingModule } from './course-content-routing.module';
import { CourseContentComponent } from './course-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [CourseContentComponent],
  imports: [
    CommonModule,
    CourseContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    TabViewModule,
    AccordionModule,
    NgbCollapseModule,
    NgxGalleryModule,
    ChatModule
  ]
})
export class CourseContentModule { }
