import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    @Inject(DOCUMENT) private dom
  ) {
    let links = [
      { rel: "canonical", href: "  https://www.selectyouruniversity.com/exams" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Top Exams in India" },
      { name: "description", content: "Get all the latest and important updates related to exams in India and abroad here. Stay up to date with NEET, IELTS/TOEFL, GRE, NEXT, FMGE and more exams. " },
    ]
    this.title.setTitle('Top Exams in India')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
   }

  ngOnInit() {
  }

}
