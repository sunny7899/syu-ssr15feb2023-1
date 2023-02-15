import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeFilterRoutingModule } from './college-filter-routing.module';
import { CollegeFilterComponent } from './college-filter.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatModule } from '../chat/chat.module';


@NgModule({
  declarations: [CollegeFilterComponent],
  imports: [
    CommonModule,
    CollegeFilterRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    FormsModule, ReactiveFormsModule,
    ChatModule
  ]
})
export class CollegeFilterModule { }
