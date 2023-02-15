import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) { 
    let links = [
      { rel: "canonical", href: " https://www.selectyouruniversity.com/privacy" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: " Privacy Policy - Select Your University" },
      { name: "description", content: "Check out how we maintain the privacy of our visitors at our site." },
    ]
    this.title.setTitle(' Privacy Policy - Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }

  ngOnInit() {
  }

}
