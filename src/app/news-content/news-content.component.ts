import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as newsData from '../news/newsData';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  console: any = console;
  newsCategorie: any = newsData.newsCategories
  data: any = newsData.newsdata
  isReadMore: any = true
  isShade: any = true
  newsData: any
  currentUrl: any
  url: any
  getUrl : any
  allBlog: any = []
  latestBlog: any = []
  displayBasic: any
  h1Title: any
  constructor(private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) {

  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  ngOnInit() {
    //this.currentUrl = this.router.url.split('/').pop()
    this.getUrl = this.router.url.split('/'); 
    this.currentUrl = this.getUrl[this.getUrl .length-2];
    this.currentUrl = this.currentUrl+"/.";
    console.log(' this.data: ',  this.data);
    this.data.forEach((ndata: any) => {
      ndata.forEach((news: any) => {
        if (news.url === this.currentUrl) {
          this.newsData = news
        }
      });


    });
    this.data.forEach((bg: any) => {
      bg.forEach((b: any) => {
        this.allBlog.push(b)
      });
    });
    this.allBlog.sort(function (a: any, b: any) {
      // convert date object into number to resolve issue in typescript
      return +new Date(b.date) - +new Date(a.date);
    })
    this.latestBlog = this.allBlog.splice(0, 10)
    console.log('this.latestBlog: ', this.latestBlog);
    console.log('this.currentUrl: ', this.currentUrl);
    console.log('newsCategorie: ', this.newsCategorie);
    console.log('data: ', this.data);
    console.log('this.newsData: ', this.newsData);


    let link: HTMLLinkElement = this.dom.createElement('link');
    this.dom.head.appendChild(link);
    let metas: any
    let links: any
    let titles: any
    console.log('this.newsData: ', this.newsData);

    this.newsData.data.forEach((inf: any) => {
        if (inf.type === 'meta') {
          metas = inf.meta
        }
        if (inf.type === 'meta-title') {
          titles = inf.title
        }
        if (inf.type === 'meta-links') {
          links = inf.link
        }
      });
    console.log('titles: ', titles);
    console.log('links: ', links);
    console.log('metas: ', metas);

    this.title.setTitle(titles)
    links.forEach((lik: any) => {
      link.setAttribute(lik.rel, lik.href);
    });
    metas.forEach((met: any) => {
      this.meta.addTag(met);
    });

    this.newsData.data.forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    
    console.log('this.h1Title: ', this.h1Title);
  }

  routerParentPage(place: any) {
    console.log('this.newsData: ', this.newsData);
    console.log('place: ', place);
    let url = place.replaceAll(' ', '-')
    this.router.navigate([`news/category/${url.toLowerCase()}/`]);
  }

  showText() {

  }

}
