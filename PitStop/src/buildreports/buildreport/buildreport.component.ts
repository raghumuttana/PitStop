import { Component, OnInit } from '@angular/core';
import { IOperatingSystem, IDuration, IEnvironment, IDatacenter } from './buildreport';
import { OperatingSystemsService } from './operatingsystems.service';
import { DurationService } from './durations.service';
import { EnvironmentsService } from './environments.service';

@Component({
    selector: 'app-buildreport',
    templateUrl: './buildreport.component.html',
    styleUrls: ['./buildreport.component.css'],
    providers: [OperatingSystemsService, DurationService, EnvironmentsService]
})

export class BuildReportComponent implements OnInit {
    operatingSystemsList: IOperatingSystem[];
    durationsList: IDuration[];
    constructor(private _iOsService: OperatingSystemsService,
                private _durationService: DurationService,
                private _environmentService: EnvironmentsService) {
    }

    listFilters = '';
    recordedFilters = '';
    imgSrc: './images/mycompute-logo.JPG';

    environmentsList: IEnvironment[];

    dataCentersList: IDatacenter[] = [
        {
            datacenterId  : 1,
            datacenterValue : 'AP-SG-C01 Data Center (Singapore, SGP)',
            datacenterText : 'Some Description about the data center'
        },
        {
            datacenterId  : 1,
            datacenterValue : 'Carlstadt Data Center (Carlstadt, NJ)',
            datacenterText : 'Some Description about the data center'
        },
        {
            datacenterId  : 1,
            datacenterValue : 'CDC1 (Bear, DE)',
            datacenterText : 'Some Description about the data center'
        }
    ];

    statusList: any[] = [
        {
            statusId  : 1,
            statusValue : 'Success',
            statusText : 'Some Description about the status'
        },
        {
            statusId  : 2,
            statusValue : 'In-Progress',
            statusText : 'Some Description about the status'
        },
        {
            datacenterId  : 3,
            statusValue : 'Failure',
            statusText : 'Some Description about the data center'
        },
        {
            statusId  : 4,
            statusValue : 'NA',
            statusText : 'Some Description about the status'
        }
    ];

    filterResults(): void {
     //   this.listFilters =  this.listFilters + ' ' + this.listFilters ;
     this.recordedFilters = this.recordedFilters + this.listFilters;
    }

    ngOnInit() {
        this.operatingSystemsList = this._iOsService.getOperatingSystems();
        this.durationsList = this._durationService.getDurations();
        this.environmentsList = this._environmentService.getEnvironments();
    }
}

