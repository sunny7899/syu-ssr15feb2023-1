import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


  loginForm = new FormGroup({
     text: new FormControl('',Validators.required),
     email: new FormControl('',Validators.required),
     number: new FormControl('',Validators.required),
     textarea: new FormControl('',Validators.required)  
  })
  get text(){return this.loginForm.get('text')}
  get email(){return this.loginForm.get('email')}
  get number(){return this.loginForm.get('number')}
  get textarea(){return this.loginForm.get('textarea')}



  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom
  ) {
    let links = [
      { rel: "canonical", href: "https://www.selectyouruniversity.com/contact-us" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Contact Us - Select Your University" },
      { name: "description", content: "Have any query regarding study abroad? Call us now for details information. Our experts counceller will guide you." },
    ]
    this.title.setTitle('Contact Us - Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });

   }

  ngOnInit() {

    
  }

}
