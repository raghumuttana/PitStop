import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeaturedListComponent } from '../offerings/featuredlist/featured-list.component';
import { BasicToolsComponent } from '../offerings/customOfferings/basictools/basictools.component';
import { ApplicationListComponent } from '../offerings/customOfferings/applications/applications.component';
import { FeedBackComponent } from '../feedback/feedback.component';
import { BuildReportComponent } from '../buildreports/buildreport/buildreport.component';
import { BuildSummaryComponent } from '../buildreports/buildsummary/buildsummary.component';
import { ProgressTrackerComponent } from '../buildreports/shared/progresstracker/progresstracker.component';
import { FiltersComponent } from '../buildreports/shared/filters/filters.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturedListComponent,
    BasicToolsComponent,
    ApplicationListComponent,
    FeedBackComponent,
    BuildReportComponent,
    BuildSummaryComponent,
    ProgressTrackerComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path: 'buildsummary', component: BuildSummaryComponent},
        {path: 'buildreport', component: BuildReportComponent},
        {path: 'buildreport/:id', component: ProgressTrackerComponent},
        {path: 'progresstracker', component: BuildReportComponent},
        {path: '', redirectTo: 'buildsummary', pathMatch: 'full'},
        {path: 'featuredapps', component: FeaturedListComponent},
        {path: 'basictools', component: BasicToolsComponent},
        {path: 'appslist', component: ApplicationListComponent},
        {path: 'feedback', component: FeedBackComponent},
        {path: '**', component: BuildSummaryComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

