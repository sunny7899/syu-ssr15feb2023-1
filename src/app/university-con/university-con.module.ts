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
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [UniversityConComponent],
  imports: [
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
  ]
})
export class UniversityConModule { }
