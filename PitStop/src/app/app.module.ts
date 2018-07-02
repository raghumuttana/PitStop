import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeaturedListComponent } from '../offerings/featuredlist/featured-list.component';
import { BasicToolsComponent } from '../offerings/customOfferings/basictools/basictools.component';
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
import { CheckoutComponent } from '../checkout/checkout.component';
import { DscblocksComponent } from '../dscblocks/dscblocks.component';
import { SccmApplicationListComponent } from '../sccmapplications/sccmapplications.component';
import { HttpClientModule } from '@angular/common/http';
import { MyConfigComponent } from '../myconfig/myconfig.component';
import { DndModule } from 'ng2-dnd';
import { NgxSortableModule } from 'ngx-sortable';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedListComponent,
    BasicToolsComponent,
    SccmApplicationListComponent,
    FeedBackComponent,
    SqlServer2014ConfigurationComponent,
    RawDiskConfigurationComponent,
    AddToClusterComponent,
    CreateClusterComponent,
    BreadcrumbsComponent,
    CreateDSCComponent,
    MyOrdersComponent,
    ProgressTrackerComponent,
    MyConfigComponent,
    CheckoutComponent,
    DscblocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxSortableModule,
    DndModule.forRoot(),
    TreeviewModule.forRoot(),
    RouterModule.forRoot([
        {path: 'featuredapps', component: FeaturedListComponent},
        {path: 'basictools', component: BasicToolsComponent},
        {path: 'sccmappslist', component: SccmApplicationListComponent},
        {path: 'feedback', component: FeedBackComponent},
        {path: 'rawdiskconfig', component: RawDiskConfigurationComponent},
        {path: 'sqlserver2014config', component: SqlServer2014ConfigurationComponent},
        {path: 'addnodetocluster', component: AddToClusterComponent},
        {path: 'createcluster', component: CreateClusterComponent},
        {path: 'createdsc', component: CreateDSCComponent},
        {path: 'myorders', component: MyOrdersComponent},
        {path: 'myconfig', component: MyConfigComponent},
        {path: 'checkout', component: CheckoutComponent},
        {path: 'dscblocks', component: DscblocksComponent},
        {path: 'myorders/:id', component: ProgressTrackerComponent},
        {path: '**', component: FeaturedListComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

