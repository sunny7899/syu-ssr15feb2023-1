import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
// import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { GalleryItem, ImageItem } from 'ng-gallery';
import *as collegeContent from './data'
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-exam-content',
  templateUrl: './exam-content.component.html',
  styleUrls: ['./exam-content.component.scss']
})
export class ExamContentComponent implements OnInit {

  RegistrationForm1: FormGroup;
  modalRef: BsModalRef;
  form1 = true;
  form2 = false;
  form3 = false;
  form4 = false;
  RegistrationFrom1: FormGroup;
  RegistrationFrom2: FormGroup;
  RegistrationFrom3: FormGroup;
  RegistrationFrom4: FormGroup;
  nsrNo: any;

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
        `https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=${this.currentUrl}&section=insertdetails`
      )
      .subscribe((res) => {
        console.log('res', res);
        this.nsrNo = res;
      });
    console.log('form 1', this.RegistrationForm1.value);
  }


  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  isReadMore = true
  collegeContents: any = collegeContent
  isShade = true
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  activSubTab: string = 'tab1';
  elementPosition: any;
  elementPosition1: any
  displayBasic: boolean;
  posturl
  collegeData: any
  currentUrl: any
  getUrl: any
  url: any
  studuentAlsoVisit: any
  posts:any;

  CoursesFees = []
  eventaddmission = []
  courseaddmission = []
  placement = []
  news = []
  gallery: any
  galleryType: any
  h1Title: any

  private link: HTMLLinkElement;
  createLinkForCanonicalURL: any;
  examData: any;

  isActive(tabName) {
    return this.activeTab === tabName;
  }

  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + "&output=embed");
  }

  makeActive(tab) {

    console.log('tab', tab)
    console.log('this.url', this.url)
    if (this.url.length > 1) {
      if (tab === 'info') {
        this.router.navigate(['exams/' + this.url[2]+'/.'])
      } else if (tab === 'qna') {
        this.router.navigate(['exams/' + this.url[2] + '/' + 'faq/.'])
      } else {
        this.router.navigate(['exams/' + this.url[2] + '/' + tab+'/.'])
      }
    } else {
      this.router.navigate(['exams/' + this.currentUrl+'/.'])
    }
    this.activeTab = tab;
    window.scroll({
      top: 425,
      left: 0,
      behavior: 'smooth'
    });
  }
  makeActiveTab(tab) {
    this.activeTab = tab;
  }

  isActiveSubTab(tabName) {
    return this.activSubTab === tabName;
  }

  makeActiveSubTab(tab) {
    this.activSubTab = tab;
    window.scroll({
      top: 425,
      left: 0,
      behavior: 'smooth'
    });
  }
  makeActiveTabSub(tab) {
    this.activSubTab = tab;
  }
  // sub Tab End


  showBasicDialog() {
    this.displayBasic = true;
  }

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) private dom
  ) {
    let link: HTMLLinkElement = this.dom.createElement('link');
    this.dom.head.appendChild(link);
    let urls = this.router.url.split('/');
    let data = this.collegeContents[urls[2].replace(/-/g, "")]
    console.log('data: ', data);
    console.log('urls: ', urls);
    data = data[urls[2].replace(/-/g, "")]
    //data = data['info'];
    let metas:any
    let links:any
    let titles:any;
    if(urls.length > 4){
      let tabData = data[urls[3].replace(/-/g, "")];
      if(tabData){
        tabData.forEach((inf:any) => {
          if(inf.type ==='meta'){
            metas=inf.meta
          }
          if(inf.type ==='meta-title'){
            titles= inf.title
          }
          if(inf.type === 'meta-links'){
            links= inf.link
          }
      });
      }
    }else {
      data.info.forEach((inf:any) => {
          if(inf.type ==='meta'){
            metas=inf.meta
          }
          if(inf.type ==='meta-title'){
            titles= inf.title
          }
          if(inf.type === 'meta-links'){
            links= inf.link
          }
      });
    }
    console.log('titles: ', titles);
    console.log('links: ', links);
    console.log('metas: ', metas);
    
    this.title.setTitle(titles)
    if (links) {
      links.forEach((lik: any) => {
        link.setAttribute(lik.rel, lik.href);
      });
    }
    if (metas) {
      metas.forEach((met: any) => {
        this.meta.addTag(met);
      });
    }
  }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  images2: GalleryItem[];
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth" });
  }

  getNews(url) {
    this.api.get(`syudynamicnews/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.news = res.data
        console.log('this.news: ', this.news);
      }
    })
  }

  getGallery(url) {
    this.api.get(`syudynamicimage/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        let courceName = []
        courceName = res.object.map(function (obj) {
          return obj.cCategory
        })
        courceName = [...new Set(courceName)];
        let data = {
          image: [],
          video: []
        }
        res.object.forEach((obj, i) => {
          if (obj.cContentType === 'Image') {
            data.image.push(obj)
          } else {
            data.video.push(obj)
          }
        })

        console.log('data: ', data);

        console.log('courceName: ', courceName);
        courceName.forEach((cname, id) => {

          data.image.forEach((obj, i) => {
            if (cname === obj.cCategory) {
              data.image.push(obj)
            }
          });
        });
        this.galleryType = courceName
        data.video.forEach(vd => {
          let url = vd.cImageUrl
          // let spliturl = Array.from(url)
          console.log('test', url.split("/"));
        });
        this.gallery = data
        console.log('data: ', data);
        console.log('this.placement: ', this.gallery);
      }
    })
  }

  getplaceMent(url) {
    this.api.get(`collegeplacementmaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.placement.push(res.object[0])
        console.log('this.placement: ', this.placement);
      }
    })
  }

  getaddmission(url) {
    this.api.get(`syudadmissionmaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        res.object.forEach(evn => {
          this.eventaddmission.push({ Events: evn.cEvents, 'Important Dates': evn.cImportantDates })
          this.courseaddmission.push({ Course: 'Test', 'Exam Accepted': evn.cExamAccepted })
        });
        console.log('this.eventaddmission: ', this.eventaddmission);
        console.log('this.courseaddmission: ', this.courseaddmission);
      }
    })
  }

  getCoursesFees(url) {
    this.api.get(`collegemaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        let courceName = []
        courceName = res.object.map(function (obj) {
          return obj.cCourse
        })
        courceName = [...new Set(courceName)];
        console.log('courceName: ', courceName);
        courceName.forEach((cname, id) => {
          let data = []
          res.object.forEach((obj, i) => {
            if (cname === obj.cCourse) {
              data.push(obj)
            }
            if (i === res.object.length - 1) {
              this.CoursesFees[id] = data
            }
          });
        });
        console.log('this.CoursesFees: ', this.CoursesFees);
      }
    })
  }

  getStudentVisit() {
    this.api.getAll('collegemaster/subject1').subscribe((res: any) => {
      this.studuentAlsoVisit = res.data

    })
  }
  ngOnInit() {
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
    this.getStudentVisit()
    //this.currentUrl = this.router.url.split('/').pop()
    this.getUrl = this.router.url.split('/'); 
    this.currentUrl = this.getUrl[this.getUrl .length-2];
    this.currentUrl = this.currentUrl;
    //console.log('this.currentUrl: ', this.currentUrl);
    //this.url = this.router.url.split('/');
    //this.url = this.getUrl[this.getUrl .length-2];
    this.url = this.router.url.split('/');
    if (this.url.length > 4) {
      if (this.url[3] === 'courses-and-fees') {
        this.getCoursesFees(this.url[2])
      }
      if (this.url[3] === 'admission') {
        this.getaddmission(this.url[2])
      }
      if (this.url[3] === 'placement') {
        this.getplaceMent(this.url[2])
      }
      if (this.url[3] === 'gallery') {
        this.getGallery(this.url[2])
        this.makeActiveTabSub('images')
      }
      if (this.url[3] === 'news') {
        this.getNews(this.url[2])
      }
    }
    console.log('collegeContent: ', collegeContent);
    const data = collegeContent[this.url[2].replace(/-/g, "")]
    console.log('data: ', data);
    this.collegeData = data[this.url[2].replace(/-/g, "")]
    
    if (this.url.length > 4) {
      this.makeActiveTab(this.url[3]);
    } else {
      this.makeActiveTab('info');
    }

    // adding meta tag by url
    console.log('this.collegeData: ', this.collegeData);
    //END adding meta tag by url
    if (this.url.length > 3) {
      this.collegeData[this.url[this.url.length - 1].replace(/-/g, "")].forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    } else {
      this.collegeData.info.forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    }
    console.log('this.h1Title: ', this.h1Title);

    // this.posturl = this.router['location']._platformLocation.location.origin + this.router.url
    // this.posturl="https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/"
    // this.makeActiveTab('info');
    this.images2 = [
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      // ... more items
    ];
    this.galleryOptions = [
      {
        width: '100%',
        height: '45vh',
        thumbnailsColumns: 4,
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        // layout:NgxGalleryLayout.
      },
      // max-width 800
      {
        breakpoint: 768,
        width: '94%',
        height: '30vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1400,
        width: '100%',
        height: '50vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // ma
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '30vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../assets/img/BG.jpg',
        medium: '../../assets/img/BG.jpg',
        big: '../../assets/img/BG.jpg'
      },
      {
        small: '../../assets/img/colg.png',
        medium: '../../assets/img/colg.png',
        big: '../../assets/img/colg.png'
      },
      {
        small: '../../assets/img/College.jpg',
        medium: '../../assets/img/College.jpg',
        big: '../../assets/img/College.jpg'
      },

    ];

  }

  galleriaImages: [
    {
      "previewImageSrc": "../../assets/img/BG.jpg",
      "thumbnailImageSrc": "../../assets/img/BG.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "../../assets/img/College.jpg",
      "thumbnailImageSrc": "../../assets/img/College.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "../../assets/img/College.jpg",
      "thumbnailImageSrc": "../../assets/img/College.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngAfterViewInit() {
    this.elementPosition = this.navTabs.nativeElement.offsetTop;
    this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
  }
  @HostListener('window:scroll')
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.elementPosition) {

      this.sticky = true;
    }
    if (windowScroll <= this.elementPosition) {
      this.sticky = false;
    }
    if (windowScroll >= this.elementPosition1) {
      this.stickyDiv = true;
    }
    if (windowScroll <= this.elementPosition1) {
      this.stickyDiv = false;
    }
  }
}
