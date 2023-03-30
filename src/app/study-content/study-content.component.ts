import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as studyCon from './data'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  //form starts here
  modalRef: BsModalRef;
  form1 = true;
  form2 = false;
  form3 = false;
  form4 = false;
  RegistrationFrom1: FormGroup;
  RegistrationFrom2: FormGroup;
  RegistrationFrom3: FormGroup;
  RegistrationFrom4: FormGroup;
  nsrNo: any
  showMsg: boolean = false;

  get m() {
   return this.RegistrationFrom1.controls;
 }

 public submitForm1() {
   if (this.RegistrationFrom1.valid) {
     this.form1 = false;
     this.form2 = true;
     // this.form3 = false
     // this.form4 = false
   }
   let data = this.RegistrationFrom1.value
   data['refNo'] = 777
   data['cAddressLine'] = 'Na'
   data['cState'] = 'Na'
   data['cPinCode'] = "Na"
   data['cParantNo'] = 'Na'
   data['cDataFrom'] = 1
   data['AllocatedTo'] = 0
   data['CurrentStatus'] = 0
   data['cRemarks'] = this.RegistrationFrom1.value.qeducation
   data['cCountry'] = "Na"
   data['cWebsite'] = 'http://demo.mentebit.com/#/'
   data['cCoutryCode'] = "Na"
   console.log('rom1', this.RegistrationFrom1.value)
   const { cCandidateName, cEmail, cMobile } = this.RegistrationFrom1.value;
   this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&section=insertdetails`)
     .subscribe((res) => {
       console.log('res', res)
       this.nsrNo = res

     })
   console.log('form 1', this.RegistrationFrom1.value)
   console.log('form 2', this.RegistrationFrom2.value)
   console.log('form 3', this.RegistrationFrom3.value)
 }

 public back1() {
   this.form1 = true;
   this.form2 = false;
   this.form3 = false;
 }
 public back2() {
   if (this.RegistrationFrom1.valid) {
     this.form1 = false;
     this.form2 = true;
     this.form3 = false;
   }
 }

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,

    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
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

    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

}
