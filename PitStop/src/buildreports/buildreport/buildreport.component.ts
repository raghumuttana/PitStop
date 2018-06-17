import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buildreport',
    templateUrl: './buildreport.component.html',
    styleUrls: ['./buildreport.component.css']
})

export class BuildReportComponent implements OnInit {
    constructor() {
    }

    listFilters = '';
    recordedFilters = '';
    imgSrc: './images/mycompute-logo.JPG';
     
    filterResults(): void {
     //   this.listFilters =  this.listFilters + ' ' + this.listFilters ;
     this.recordedFilters = this.recordedFilters + this.listFilters;
    }

    ngOnInit() { }
}

