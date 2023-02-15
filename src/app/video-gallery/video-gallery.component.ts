import { Component, Inject, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {
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
  posturl:any


  isActive(tabName:any){
    return this.activeTab === tabName;
  }

  makeActive(tab:any){
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
  constructor(private viewportScroller: ViewportScroller,private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
    ) {
      let links = [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/video-gallery" },
        // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
      ]
      links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      let metas:any =[
        { name: "title", content: "Video Gallery - Select Your University" },
        { name: "description", content: " Check out our videos here to know more about top courses, fees structure, cost of living, etc."},
      ]
      this.title.setTitle('Video Gallery - Select Your University')
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
  ngOnInit() {
    this.makeActiveTab('info');
  }
  ngAfterViewInit(){
    // this.elementPosition = this.navTabs.nativeElement.offsetTop;
    // this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
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
