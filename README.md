## First created a repository named "AngularBasicRouting"

## Then created a folder for the components inside the folder “app”, after that I created 4 components which are; login, signup, homepage, and landing page.

## Next is I create a app.module.ts to set-up, import, configure, and define my route.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LadingPageComponent } from './components/lading-page/lading-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'lading-page', component: LadingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/homepage' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LadingPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

## Then I removed the standalone: true and imports: [] in all the components typescripts to make them all connected.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
}

## Next, I added <router-outlet></router-outlet> to app.component.html so the routed components will be displayed.

<nav>
  <a routerLink="/login">Log In</a><br>
  <a routerLink="/signup">Sign Up</a><br>
  <a routerLink="/homepage">Homepage</a><br>
  <a routerLink="/lading-page">Landing Page</a><br>
<br>
</nav>
<router-outlet></router-outlet>

## Then I run, tested, and debugged.

## Lastly, pushed all the files in github.
