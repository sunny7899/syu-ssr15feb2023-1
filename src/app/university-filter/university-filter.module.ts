import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityFilterRoutingModule } from './university-filter-routing.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { UniversityFilterComponent } from './university-filter.component';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [UniversityFilterComponent],
  imports: [
    CommonModule,
    UniversityFilterRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    FormsModule, 
    ReactiveFormsModule,
    ChatModule
  ]
})
export class UniversityFilterModule { }