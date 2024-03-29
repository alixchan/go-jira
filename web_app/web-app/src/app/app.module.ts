import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CardComponent } from './components/layout/card/card.component';
import { HomeComponent } from './components/layout/home/home.component';
import { AboutComponent } from './components/layout/about/about.component';
import { ProjectListComponent } from './components/feature/project-list/project-list.component';
import { ProjectIssuesComponent } from './components/feature/project-issues/project-issues.component';
import { ProjectCompareComponent } from './components/feature/project-compare/project-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    ProjectListComponent,
    ProjectIssuesComponent,
    ProjectCompareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
