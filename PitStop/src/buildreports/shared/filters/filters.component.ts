import { Component, OnInit } from '@angular/core';
import { OperatingSystemsService } from '../../buildreport/operatingsystems.service';
import { DurationService } from '../../buildreport/durations.service';
import { EnvironmentsService } from '../../buildreport/environments.service';
import { IOperatingSystem, IDuration, IEnvironment } from '../../buildreport/buildreport';

@Component({
    selector: 'app-filters',
    templateUrl: 'filters.component.html',
    styleUrls: ['./filters.component.css'],
    providers: [OperatingSystemsService, DurationService, EnvironmentsService]

})

export class FiltersComponent implements OnInit {
    operatingSystemsList: IOperatingSystem[];
    durationsList: IDuration[];
    environmentsList: IEnvironment[];
    constructor(private _iOsService: OperatingSystemsService,
                private _durationService: DurationService,
                private _environmentService: EnvironmentsService) {
    }
    dataCentersList: any[] = [
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

    ngOnInit() {
        this.operatingSystemsList = this._iOsService.getOperatingSystems();
        this.durationsList = this._durationService.getDurations();
        this.environmentsList = this._environmentService.getEnvironments();
    }
}
