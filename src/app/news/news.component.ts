import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as newsData from './newsData';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsCategorie:any =newsData.newsCategories
  data:any =newsData.newsdata
  url: any
  currentUrl: any
  news:any
  allBlog:any =[]
  latestBlog:any=[]
  carouselOptions = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        dotsEach: 5,
        items: 1,
        nav: true
      },
      600: {
        dotsEach: 3,
        items: 1,
        nav: true
      },
      1000: {
        dotsEach: 2,
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
        dotsEach: 1,
        items: 4,
        nav: true,
        loop: false
      }
    }
  }
  images = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png"
    },
    
  ]
  images2 = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png",
      time:"7"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png",
      time:"5"
    }
    
  ]
  
  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    @Inject(DOCUMENT) private dom,
    private router: Router , private api: ApiService) {
   {
      let links = [
        { rel: "canonical", href: "  https://www.selectyouruniversity.com/news" },
        // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
      ]
      links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      let metas:any =[
        { name: "title", content: "Latest Education News 2023: Exam, Admission, Results, Colleges" },
        { name: "description", content: "Know more about the latest exams and educational announcements in Select Your University's news section. Click here." },
      ]
      this.title.setTitle('Latest Education News 2023: Exam, Admission, Results, Colleges')
      metas.forEach(element => {
        this.meta.addTag(element);
      });
     }
   }
  

  ngOnInit() {
    console.log('newsData: ', newsData);
    console.log('newsCategorie: ', this.newsCategorie);
    this.data.forEach((bg:any) => {
      bg.forEach((b:any) => {
          this.allBlog.push(b)
        });
      });
     this.allBlog.sort(function(a:any, b:any) {
       // convert date object into number to resolve issue in typescript
       return  +new Date(b.date) - +new Date(a.date);
      })
      this.latestBlog=  this.allBlog.splice(1, 2)
      console.log('this.allBlog: ', this.allBlog);
      console.log('this.latestBlog: ', this.latestBlog);
  }
  makeActive(tab:any) {
    this.router.navigate(['news/' + tab])
  }

  get(item:any){
    this.router.navigate(['news/category/' + item[0].Categories + '/.'], { state: item });
  }
  routeAllBlog(){
    this.router.navigate(['news/category/all-news/.']);
  }

  public signUp = false;
  singinUp() {
    console.log('this.email: ', this.email);
    let data =
    {
      "nSrNo": 0,
      "AllocatedTo": 1,
      "cEmail": this.email,
      "cISDCode": "null",
      "cCandidateFName": "null",
      "cCountryOfCitizenship": "null",
      "cGender": "null",
      "cParentISDCode": "null",
      "cStatus": "null"
    }

    this.api.create('syudstudentmaster/info', data).subscribe((res) => {
      console.log('res: ', res);

    })
    setTimeout(() => {
      this.signUp = true;
    })
  }
  email(arg0: string, email: any) {
    throw new Error('Method not implemented.');
  }

  
}

