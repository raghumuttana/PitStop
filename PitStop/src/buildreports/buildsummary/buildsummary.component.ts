import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buildsummary',
    templateUrl: 'buildsummary.component.html',
    styleUrls: ['./buildsummary.component.css']
})

export class BuildSummaryComponent implements OnInit {
    constructor() { }
    basicToolsList: any[] = [
        {
            basicToolId : 1,
            basicToolName : 'Windows Server 2012 R2',
            basicToolText : '',
            // tslint:disable-next-line:max-line-length
            basicToolDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            basicToolId : 2,
            basicToolName : 'Windows Server 2008',
            basicToolText : '',
            // tslint:disable-next-line:max-line-length
            basicToolDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        }
    ];

    durationsList: any[] = [
        {
            durationId  : 1,
            durationValue : 15,
            durationText : '15 mins ago'
        },
        {
            durationId  : 2,
            durationValue : 30,
            durationText : '30 mins ago'
        },
        {
            durationId  : 3,
            durationValue : 45,
            durationText : '45 mins ago'
        },
        {
            durationId  : 4,
            durationValue : 60,
            durationText : '1 Hour ago'
        },
        {
            durationId  : 5,
            durationValue : 600000,
            durationText : 'Older than 1 hour'
        }
    ];

    environmentsList: any[] = [
        {
            environmentId  : 1,
            environmentValue : 'DEV',
            environmentText : 'Development environment'
        },
        {
            environmentId  : 2,
            environmentValue : 'SIT',
            environmentText : 'SIT environment'
        },
        {
            environmentId  : 3,
            environmentValue : 'UAT',
            environmentText : 'User Acceptance Test environment'
        },
        {
            environmentId  : 3,
            environmentValue : 'LIVE',
            environmentText : 'Production/Live environment'
        }
    ];

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

    ngOnInit() { }
}
