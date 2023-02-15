import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    @Inject(DOCUMENT) private dom
  ) { 
    let links = [
      { rel: "canonical", href: "https://www.selectyouruniversity.com/course" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Top Courses in India & Abroad" },
      { name: "description", content: "Get all the latest and important updates related to courses in India and abroad here. Stay up to date with MBBS, Engineering & MBA and more courses" },
    ]
    this.title.setTitle('Top Courses in India & Abroad')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }

  ngOnInit() {
  }

}
