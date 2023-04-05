import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
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

  Course: any = ['MBBS','BTech', 'MTech','MBA','PGDM','BCA','MCA', 'Bsc', 'Msc'];
  registrationForm = this.fb.group({
    cCourse: ['', [Validators.required]],
  });
  RegistrationForm1: any;
  currentUrl: any;
  changeCourse(e: any) {
    this.cCourse?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get cCourse() {
    return this.registrationForm.get('cCourse');
  }

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

  hide() {
    this.bsModalRef.hide();
  }


  get m() {
   return this.RegistrationFrom1.controls;
 }

 //second form
 form5 = true;
 form6 = false;
 get m2() {
   return this.RegistrationForm1.controls;
 }

 public submitFormS() {
   if (this.RegistrationForm1.valid) {
     this.form5 = false;
     this.form6 = true;
     this.form3 = false;
     this.form4 = false;
   }
   let data = this.RegistrationForm1.value;
   data['refNo'] = 777;
   data['cAddressLine'] = 'Na';
   data['cState'] = 'Na';
   data['cPinCode'] = 'Na';
   data['cParantNo'] = 'Na';
   data['cDataFrom'] = 1;
   data['AllocatedTo'] = 0;
   data['CurrentStatus'] = 0;
   //data['cRemarks'] = this.RegistrationFrom1.value.qeducation;
   //data['cCountry'] = 'Na';
   data['cWebsite'] = 'http://demo.mentebit.com/#/';
   data['cCoutryCode'] = 'Na';
   console.log('rom1', this.RegistrationForm1.value);
   const {
     //cCity,
     //cCourse,
     cCandidateName,
     cEmail,
     cMobile,
     //qeducation,
     //cLinkName,
   } = this.RegistrationForm1.value;
   this.http
     .get(
       `https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=${this.currentUrl}&cCity=Na&cCourse=Na&section=insertdetails`
     )
     .subscribe((res) => {
       console.log('res', res);
       this.nsrNo = res;
     });
   console.log('form 1', this.RegistrationForm1.value);
   console.log('form 2', this.RegistrationFrom2.value);
   console.log('form 3', this.RegistrationFrom3.value);
 }

 public submitForm1() {
  if (this.RegistrationFrom1.valid) {
    this.form1 = false;
    this.form2 = true;
    this.form3 = false;
    this.form4 = false;
  }
  let data = this.RegistrationFrom1.value;
  data['refNo'] = 777;
  data['cAddressLine'] = 'Na';
  data['cState'] = 'Na';
  data['cPinCode'] = 'Na';
  data['cParantNo'] = 'Na';
  data['cDataFrom'] = 1;
  data['AllocatedTo'] = 0;
  data['CurrentStatus'] = 0;
  //data['cRemarks'] = this.RegistrationFrom1.value.qeducation;
  data['cCountry'] = 'Na';
  data['cWebsite'] = 'http://demo.mentebit.com/#/';
  data['cCoutryCode'] = 'Na';
  console.log('rom1', this.RegistrationFrom1.value);
  const {
    cCity,
    cCourse,
    cCandidateName,
    cEmail,
    cMobile,
    //qeducation,
    cLinkName,
  } = this.RegistrationFrom1.value;
  this.http
    .get(
      `https://bizcallcrmforms.com/response.php?cCity=${cCity}&cCourse=${cCourse}&cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=${this.currentUrl}&section=insertdetails`
    )
    .subscribe((res) => {
      console.log('res', res);
      this.nsrNo = res;
    });
  console.log('form 1', this.RegistrationFrom1.value);
  console.log('form 2', this.RegistrationFrom2.value);
  console.log('form 3', this.RegistrationFrom3.value);
 }
 public submitForm2() {
  const data = {
    nsrNo: this.nsrNo.nSrNo,
    fldtext1: 'Graduation Institute',
    fldValue1: this.RegistrationFrom2.value.qgraduation,
    fldtext2: 'Graduation Course',
    fldValue2: this.RegistrationFrom2.value.qcourse,
    fldtext3: 'Graduation Percentage',
    fldValue3: this.RegistrationFrom2.value.qgradper,
    fldtext4: 'Work Experience',
    fldValue4: this.RegistrationFrom2.value.qexperience,
    fldtext5: 'Extra Tests',
    fldValue5: this.RegistrationFrom2.value.qextraExam,
    fldtext6: 'GATE Score',
    fldValue6: this.RegistrationFrom2.value.qgate,
    fldtext7: 'GRE Score',
    fldValue7: this.RegistrationFrom2.value.qgre,
  };
  this.http
    .post('https://18.189.207.215:8080/databaselisteducationmaster', data)
    .subscribe((res) => {
      console.log('res', res);
    });
  if (this.RegistrationFrom1.valid) {
    this.form1 = false;
    this.form2 = false;
    this.form3 = true;
    this.form4 = false;
  }
}
public submitForm3() {
  console.log('FROM3', this.RegistrationFrom3);
  const data = {
    nsrNo: this.nsrNo.nSrNo,
    fldtext1: 'Tenth Board',
    fldValue1: this.RegistrationFrom3.value.qtenthBoard,
    fldtext2: 'Tenth Year',
    fldValue2: this.RegistrationFrom3.value.qtenthPassing,
    fldtext3: 'Tenth Percentage',
    fldValue3: this.RegistrationFrom3.value.qtenthPercentage,
    fldtext4: 'Tenth Institute',
    fldValue4: this.RegistrationFrom3.value.qschool,
    fldtext5: 'NA',
    fldValue5: 'NA',
    fldtext6: 'NA',
    fldValue6: 'NA',
    fldtext7: 'NA',
    fldValue7: 'NA',
  };
  this.http
    .post('https://18.189.207.215:8080/databaselisteducationmaster', data)
    .subscribe((res) => {
      console.log('res', res);
    });
  console.log('submitted');
  if (this.RegistrationFrom2.valid) {
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.form4 = true;
  }
}
public submitFrom4() {
  console.log('FROM4', this.RegistrationFrom4);
  const data = {
    nsrNo: this.nsrNo.nSrNo,
    fldtext1: 'Twelth Board',
    fldValue1: this.RegistrationFrom4.value.fldValue1,
    fldtext2: 'Twelth Year',
    fldValue2: this.RegistrationFrom4.value.fldValue2,
    fldtext3: 'Twelth Percentage',
    fldValue3: this.RegistrationFrom4.value.fldValue3,
    fldtext4: 'Twelth Institute',
    fldValue4: this.RegistrationFrom4.value.fldValue4,
    fldtext5: 'Twelth Specialization',
    fldValue5: this.RegistrationFrom4.value.fldValue5,
    fldtext6: 'NA',
    fldValue6: 'NA',
    fldtext7: 'NA',
    fldValue7: 'NA',
  };
  this.http
    .post('https://18.189.207.215:8080/databaselisteducationmaster', data)
    .subscribe((res) => {
      console.log('res', res);
    });
  this.hide();
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
      cCandidateName: ['', Validators.required],
      cEmail: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      cMobile: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      cCity: [''],
      cCourse: ['', Validators.required],
      //qeducation: ['', Validators.required],
    });
    this.RegistrationFrom2 = this.fb.group({
      qgraduation: ['', Validators.required],
      qcourse: ['', Validators.required],
      qgradper: ['', Validators.required],
      qextraExam: ['', Validators.required],
      qexperience: ['', Validators.required],
      qgate: ['', Validators.required],
      qgre: ['', Validators.required],
    });
    this.RegistrationFrom3 = this.fb.group({
      qtenthBoard: ['', Validators.required],
      qtenthPassing: ['', Validators.required],
      qtenthPercentage: ['', Validators.required],
      qschool: ['', Validators.required],
      qtwelvethBoard: ['', Validators.required],
      qtwelvethPassing: ['', Validators.required],
      qtwelvethPer: ['', Validators.required],
      qtwelvethSchool: ['', Validators.required],
      qtwelvethSpec: ['', Validators.required],
    });
    this.RegistrationFrom4 = this.fb.group({
      fldValue1: ['', Validators.required],
      fldValue2: ['', Validators.required],
      fldValue3: ['', Validators.required],
      fldValue4: ['', Validators.required],
      fldValue5: ['', Validators.required],
    });

   //for form 2
     this.RegistrationForm1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

}
