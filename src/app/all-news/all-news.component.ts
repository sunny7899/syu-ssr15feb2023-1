import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as newsData from "./all-news";
@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
  newsCategorie = newsData.newsCategories;
  data:any = [];
  allData:any
  url: any;
  customeCat:any
  allNews:any=[]
  currentUrl: any;


  tages={
    'exam':{
      metas:[
        { name: "title", content: " Exam Category - News" },
        { name: "description", content: " Keep all the latest information and news about admission, timetables, postponement of exams, dates, and everything in Select Your University's news section." },
      ],
      titles:' Exam Category - News',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/news/category/exam" },
      ]
    },
    "general":{
      metas:[
        { name: "title", content: "General Category - News" },
        { name: "description", content: "Get all the latest and important updates related to general news here." },
      ],
      titles:'General Category - News',
      links : [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/news/category/general" },
      ]
    },

    'all-news':{
      metas:[
        { name: "title", content: " All News Category" },
        { name: "description", content: "Check all the news updates at one place. " },
      ],
      titles:' All News Category',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/news/category/all-news" },
      ]
    },
  }
  

  constructor(private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    @Inject(DOCUMENT) private dom
    ) {
    (this.data = this.router.getCurrentNavigation()?.extras.state),
      console.log("data", this.data);
      let urls = this.router.url.split('/')
      let allTages = this.tages[urls[3]]
      console.log('allTages: ', allTages);
      allTages.links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      this.title.setTitle(allTages.titles)
      allTages.metas.forEach(element => {
        this.meta.addTag(element);
      });
   } 

  ngOnInit(): void {
    this.url = this.router.url.split('/')
    if(!this.allData){
      newsData.newsdata.forEach(nd => {
            nd.forEach(n => {
                if(n.Categories === this.url[3]){
                  this.allData=nd
                }
              });
            });
          }
    if(this.url[3]==='all-news'){
      newsData.newsdata.forEach(bg => {
        bg.forEach(b => { 
            this.customeCat = 'All News'
            this.allNews.push(b)
          });
        });
      }


    this.url = this.router.url.split('/')
    if(!this.allData){
      newsData.newsdata.forEach(nd => {
        nd.forEach(n => {
          if(n.Categories === this.url[3]){
            this.allData=nd
          }
        });
      });
    }
    if(this.url[3]==='all-news'){
      newsData.newsdata.forEach(bg => {
        bg.forEach((b:any) => { 
            this.customeCat = 'All News'
            this.allNews.push(b)
          });
        });
      }else {
        this.data = this.allData
      }

  }

  makeActive(tab:any) {
    this.router.navigate(['news/' + tab])
  }
}
