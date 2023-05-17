import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ApprootModule } from './../src/app/app.module';

platformBrowserDynamic().bootstrapModule(ApprootModule)
  .catch(err => console.error(err));
