import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  //title = 'syu';

  constructor(
    private title: Title,
    private meta: Meta,){}

    ngOnInit() {
  this.meta.addTag({ name: 'Content-Security-Policy', content: "default-src 'self' https://www.selectyouruniversity.com/; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.selectyouruniversity.com/;" });
}
}
