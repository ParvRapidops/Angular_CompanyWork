import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppAccountModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppAccountModule)
  .catch(err => console.error(err));
