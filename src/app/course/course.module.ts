import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FooterModule,
    HeaderInnerModule,
    ChatModule
  ]
})
export class CourseModule { }
