import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeaturedListComponent } from '../offerings/featured-list.component';
import { BasicToolsComponent } from '../offerings/customOfferings/basictools/basictools.component';
import { ApplicationListComponent } from '../offerings/customOfferings/applications/applications.component';
import { FeedBackComponent } from '../feedback/feedback.component';
import { BuildReportComponent } from '../buildreports/buildreport/buildreport.component';
import { BuildSummaryComponent } from '../buildreports/buildsummary/buildsummary.component';
import { ProgressTrackerComponent } from '../buildreports/shared/progresstracker.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturedListComponent,
    BasicToolsComponent,
    ApplicationListComponent,
    FeedBackComponent,
    BuildReportComponent,
    BuildSummaryComponent,
    ProgressTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path: 'buildsummary', component: BuildSummaryComponent},
        {path: 'buildreport', component: BuildReportComponent},
        {path: 'progresstracker/:id', component: ProgressTrackerComponent},
        {path: '', redirectTo: 'buildsummary', pathMatch: 'full'},
        {path: '**', component: BuildSummaryComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

