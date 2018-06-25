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
import { RawDiskConfigurationComponent } from '../rawdiskconfiguration/rawdiskconfiguration.component';
import { SqlServer2014ConfigurationComponent } from '../sqlserver2014configuration/sqlserver2014configuration.component';
import {  AddToClusterComponent } from '../clustering/addnodetocluster/addtocluster.component';
import { TreeviewModule } from 'ngx-treeview';
import { CreateClusterComponent } from '../clustering/createcluster/createcluster.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { CreateDSCComponent } from '../dsc/createdsc/createdsc.component';
import { MyOrdersComponent } from '../myorders/myorders.component';
import { ProgressTrackerComponent } from '../shared/progresstracker/progresstracker.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedListComponent,
    BasicToolsComponent,
    ApplicationListComponent,
    FeedBackComponent,
    SqlServer2014ConfigurationComponent,
    RawDiskConfigurationComponent,
    AddToClusterComponent,
    CreateClusterComponent,
    BreadcrumbsComponent,
    CreateDSCComponent,
    MyOrdersComponent,
    ProgressTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeviewModule.forRoot(),
    RouterModule.forRoot([
        {path: 'featuredapps', component: FeaturedListComponent},
        {path: 'basictools', component: BasicToolsComponent},
        {path: 'appslist', component: ApplicationListComponent},
        {path: 'feedback', component: FeedBackComponent},
        {path: 'rawdiskconfig', component: RawDiskConfigurationComponent},
        {path: 'sqlserver2014config', component: SqlServer2014ConfigurationComponent},
        {path: 'addnodetocluster', component: AddToClusterComponent},
        {path: 'createcluster', component: CreateClusterComponent},
        {path: 'createdsc', component: CreateDSCComponent},
        {path: 'myorders', component: MyOrdersComponent},
        {path: 'myorders/:id', component: ProgressTrackerComponent},
        {path: '**', component: FeaturedListComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

