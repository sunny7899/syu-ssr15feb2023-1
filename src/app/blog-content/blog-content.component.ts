import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as blogData from '../blog/blogData';
@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  blogCategorie:any =blogData.blogCategories
  data:any =blogData.blogdata
  isReadMore = true
  isShade = true
  blogsData: any
  currentUrl: any
  customeCat:any
  url: any
  getUrl: any
  allBlog:any=[]
  latestBlog:any
  h1Title:any
  constructor(private router: Router,
    private title: Title,
    private meta: Meta,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
    ) { }
  
  ngOnInit() {
    //this.currentUrl = this.router.url.split('/').pop();
    this.getUrl = this.router.url.split('/'); 
    this.currentUrl = this.getUrl[this.getUrl .length-2];
    this.currentUrl = this.currentUrl+"/.";
    this.data.forEach((bdata:any) => { 
      bdata.forEach((blog:any) => { 
        console.log('blog: ', blog);
          if(blog.url === this.currentUrl){
              this.blogsData =blog;
            }
          });
          
          
        });
        this.data.forEach((bg:any) => {
          bg.forEach((b:any) => {
              this.allBlog.push(b)
            });
          });
         this.allBlog.sort(function(a:any, b:any) {
           // convert date object into number to resolve issue in typescript
           return  +new Date(b.date) - +new Date(a.date);
          })
          this.latestBlog=  this.allBlog.splice(0, 10)
          console.log(' this.latestBlog: ',  this.latestBlog);

          let link: HTMLLinkElement = this.dom.createElement('link');
          this.dom.head.appendChild(link);
          let metas: any
          let links: any
          let titles: any

          this.blogsData.data.forEach((inf: any) => {
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
      
          this.blogsData.data.forEach((un) => {
              if (un.type === 'title') {
                this.h1Title = un.title
              }
            })
          
          console.log('this.h1Title: ', this.h1Title);

  }

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }

}
