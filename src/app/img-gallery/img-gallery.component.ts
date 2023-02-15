import { Component, Inject, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss']
})
export class ImgGalleryComponent implements OnInit {
  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  isReadMore = true
  isShade = true
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  elementPosition: any;
  elementPosition1:any
  displayBasic: boolean;
  posturl:any;
  images:any;
  url: any


  isActive(tabName:any){
    return this.activeTab === tabName;
  }

  makeActive(tab:any){
    console.log('tab: ', tab);
    this.activeTab = tab;
    window.scroll({ 
      top: 170, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  makeActiveTab(tab:any) {
    this.activeTab = tab;
  }
  showBasicDialog() {
    this.displayBasic = true;
}

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  constructor(private viewportScroller: ViewportScroller,private router: Router,private api: ApiService,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    @Inject(DOCUMENT) private dom
    ) {
      let links = [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/image-gallery" },
        // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
      ]
      links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      let metas:any =[
        { name: "title", content: " Image Gallery - Select Your University" },
        { name: "description", content: " Find out all images of medical students which went to abroad for MBBS course through us." },
      ]
      this.title.setTitle(' Image Gallery - Select Your University')
      metas.forEach(element => {
        this.meta.addTag(element);
      });
     }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth"});
  }
  
  getImages() {
    this.api.get('syudynamicimage/Pune Institute of Computer Technology, Pune').subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.images = res.object
      }
    })
  }
  ngOnInit() {
    this.makeActiveTab('seminar');
    this.getImages();
    this.makeActiveTab('info')
  }

  ngAfterViewInit(){
    this.elementPosition = this.navTabs.nativeElement.offsetTop;
    this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
  }
  @HostListener('window:scroll')
    handleScroll(){
    const windowScroll = window.pageYOffset;
      
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      }
      if(windowScroll <= this.elementPosition){
          this.sticky = false;
      }
      if(windowScroll >= this.elementPosition1){
        this.stickyDiv = true;
      }
      if(windowScroll <= this.elementPosition1){
          this.stickyDiv = false;
      }
    }
}
