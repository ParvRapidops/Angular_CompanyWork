import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'src/user/src/app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
