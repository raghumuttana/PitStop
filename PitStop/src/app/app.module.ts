import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeaturedListComponent } from '../offerings/featured-list.component';
import { BasicToolsComponent } from '../offerings/customOfferings/basictools/basictools.component';
import { ApplicationListComponent } from '../offerings/customOfferings/applications/applications.component';
import { FeedBackComponent } from '../feedback/feedback.component';
import { BuildReportComponent } from '../buildreports/buildreport/buildreport.component';
import { BuildSummaryComponent } from '../buildreports/buildsummary/buildsummary.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturedListComponent,
    BasicToolsComponent,
    ApplicationListComponent,
    FeedBackComponent,
    BuildReportComponent,
    BuildSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

