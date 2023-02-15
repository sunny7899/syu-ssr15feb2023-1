import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as blogData from './blogData';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogCategorie: any = blogData.blogCategories
  data: any = blogData.blogdata
  url: any
  currentUrl: any
  email: any
  allBlog: any = []
  latestBlog: any = []
  carouselOptions = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
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
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },

  ]
  images2 = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png",
      time: "7"
    },
    {
      text: "CLAT 2022 Provisional Merit List I Will Be Released Tomorrow",
      image: "../../assets/img/Blog_Main_Icons/l.png",
      time: "5"
    }

  ]


  constructor(private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom,
    private api: ApiService) {
    let links = [
      { rel: "canonical", href: "  https://www.selectyouruniversity.com/blog" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas: any = [
      { name: "title", content: "Education Blogs for Indian Students | Select Your University" },
      { name: "description", content: "Stay updated on top courses, latest news, admission process, fees structure, exam news, top universities & colleges and many more." },
    ]
    this.title.setTitle('Education Blogs for Indian Students | Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }

  ngOnInit() {
    this.data = blogData.blogdata
    console.log('this.data: ', this.data);
    console.log('blogData: ', blogData);
    console.log('blogCategorie: ', this.blogCategorie);
    this.data.forEach((bg: any) => {
      bg.forEach((b: any) => {
        this.allBlog.push(b)
      });
    });
    this.allBlog.sort(function (a: any, b: any) {
      // convert date object into number to resolve issue in typescript
      return +new Date(b.date) - +new Date(a.date);
    })
    this.latestBlog = this.allBlog.splice(1, 2)
    console.log('this.latestBlog: ', this.latestBlog);
    console.log('test: ', this.allBlog);
  }
  makeActive(tab: any) {
    this.router.navigate(['blog/' + tab])
  }

  get(item: any) {
    if (item[0].Categories === 'Top Colleges And Universities') {
      item.forEach((itm: any) => {
        itm.Categories = 'top-colleges-and-universitie'
      });
    }

    this.router.navigate(['blog/category/' + item[0].Categories], { state: item });
  }

  routeAllBlog() {
    this.router.navigate(['blog/category/all-blogs']);
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


}


