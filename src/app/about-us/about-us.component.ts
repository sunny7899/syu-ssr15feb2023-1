import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) { 
    let links = [
      { rel: "canonical", href: "https://www.selectyouruniversity.com/about-us" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: " About Us - Select Your University" },
      { name: "description", content: "  We are the top MBBS abroad education consultants by helping students giving depth information about study pattern & qaulity in the top universities across the world." },
    ]
    this.title.setTitle('About Us - Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }
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
        items: 1,
        nav: true
      },
      1000: {
        items: 6,
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
  images = [
    {
      text: "We make you aware about the rules and regulations of any foreign institute and we will help you in getting the invitation letter.",
      image: "../../assets/img/About_us_Icons/Our_Services/1.-Rules.png"
    },
    {
      text: "According to student’s needs, ‘Select Your University’ will provide support for educational loans.",
      image: "../../assets/img/About_us_Icons/Our_Services/2.-Educational-Loan.png"
    },
    {
      text: "We provide best medical universities with high quality education and very low fess structure.",
      image: "../../assets/img/About_us_Icons/Our_Services/3.-Best-Medical-University.png"
    },
    {
      text: "‘Select Your University’ team also helps you with the accommodation",
      image: "../../assets/img/About_us_Icons/Our_Services/4.-Accomodation-Hostel.png"
    },
    {
      text: "We also assist you with the final documentation in the university.",
      image: "../../assets/img/About_us_Icons/Our_Services/5.-Final-Documentation.png"
    },
    {
      text: "We make all the arrangements for our students from the departure till they reach to the university.",
      image: "../../assets/img/About_us_Icons/Our_Services/6.-Departure.png"
    },
    
  ]
  ngOnInit() {
  }

}
