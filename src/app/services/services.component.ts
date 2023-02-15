import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) { 
    let links = [
      { rel: "canonical", href: "  https://www.selectyouruniversity.com/services" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Our Services - Select Your University" },
      { name: "description", content: "Select Your University offers mutiple pernalized services to help their students who have dream to study abroad. We provide free counceling, admission process, all document assistance & many more." },
    ]
    this.title.setTitle('Our Services - Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }

  ngOnInit() {
  }

}
