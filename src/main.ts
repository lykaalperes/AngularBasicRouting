import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Use either bootstrapApplication or platformBrowserDynamic to bootstrap the app, not both
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// If you're using platformBrowserDynamic, this is the correct way to bootstrap the AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(error => console.error(error));
