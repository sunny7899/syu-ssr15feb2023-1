import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) { 
    let links = [
      { rel: "canonical", href: " https://www.selectyouruniversity.com/disclaimer" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Disclaimer - Select Your University" },
      { name: "description", content: "Get here information about our site’s disclaimer." },
    ]
    this.title.setTitle('Disclaimer - Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }

  ngOnInit() {
  }

}
