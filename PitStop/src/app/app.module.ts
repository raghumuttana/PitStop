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
import { RawDiskConfigurationComponent } from '../rawdiskconfiguration/rawdiskconfiguration.component';
import { SqlServer2014ConfigurationComponent } from '../sqlserver2014configuration/sqlserver2014configuration.component';
import { ClusteringComponent } from '../clustering/clustering.component';


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
    FiltersComponent,
    SqlServer2014ConfigurationComponent,
    RawDiskConfigurationComponent,
    ClusteringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path: 'featuredapps', component: FeaturedListComponent},
        {path: 'basictools', component: BasicToolsComponent},
        {path: 'appslist', component: ApplicationListComponent},
        {path: 'feedback', component: FeedBackComponent},
        {path: 'rawdiskconfig', component: RawDiskConfigurationComponent},
        {path: 'sqlserver2014config', component: SqlServer2014ConfigurationComponent},
        {path: 'clustering', component: ClusteringComponent},
        {path: '**', component: FeaturedListComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

