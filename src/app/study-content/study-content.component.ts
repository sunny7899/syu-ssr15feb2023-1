import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as studyCon from './data'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-study-content',
  templateUrl: './study-content.component.html',
  styleUrls: ['./study-content.component.scss']
})
export class StudyContentComponent implements OnInit {
  studyData:any = studyCon
  displayData:any
  url: any
  h1Title:any
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) { }
  carouselOptions2:OwlOptions  = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    // responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
  images2 = [
    {
      text: "Study In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "Study In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    
    
  ]
  ngOnInit() {
    console.log('studyCon: ', studyCon);
    this.url = this.router.url.split('/')
    console.log('this.studyData: ', this.studyData);
    this.displayData = this.studyData[this.url[1].replace(/-/g, "")][this.url[1].replace(/-/g, "")]
    console.log('this.displayData: ', this.displayData);
    let link: HTMLLinkElement = this.dom.createElement('link');
    this.dom.head.appendChild(link);
    let metas: any
    let links: any
    let titles: any

   this.displayData.data.forEach((inf: any) => {
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

   this.displayData.data.forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    
    console.log('this.h1Title: ', this.h1Title);
  }

}
