import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import { Location } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
};


 if (document.readyState === 'complete') {
   bootstrap();
 } else {
   document.addEventListener('DOMContentLoaded', bootstrap);
 }

//  const __stripTrailingSlash = (Location as any).stripTrailingSlash;
// (Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {
//   return /[^\/]\/$/.test(url) ? url : __stripTrailingSlash(url);
// }
 
