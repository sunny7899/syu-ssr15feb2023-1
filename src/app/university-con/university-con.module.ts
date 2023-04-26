import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityConRoutingModule } from './university-con-routing.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { TabViewModule } from 'primeng/tabview';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { OwlModule } from 'ngx-owl-carousel';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// import { GalleriaModule } from 'primeng/components/galleria/galleria';
import { NavModule } from '../nav/nav.module';
import { DialogModule } from 'primeng/dialog';
import { UniversityConComponent } from './university-con.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatModule } from '../chat/chat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Location} from '@angular/common';  


@NgModule({
  declarations: [UniversityConComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ChatModule,
    UniversityConRoutingModule,
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
  ]
})
export class UniversityConModule { }
const __stripTrailingSlash = (Location as any).stripTrailingSlash;  
Location.stripTrailingSlash = function (url) {  
  if (url.endsWith('/')) {  
    url=url;  
  }  
  else {  
    url=url+'/';  
  }  
  const queryString$ = url.match(/([^?]*)?(.*)/);  
  if (queryString$[2].length > 0) {  
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);  
  }  
  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);  
};  

