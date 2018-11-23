import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AuthModule } from './app/auth/auth.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

platformBrowserDynamic().bootstrapModule(AuthModule)
  .catch(err => console.log(err));

