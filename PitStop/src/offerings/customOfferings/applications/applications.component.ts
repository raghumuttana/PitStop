import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-applications',
    templateUrl: './applications.component.html'
})

export class ApplicationListComponent implements OnInit {
    constructor() { }
    applicationListHeading = 'Choose from the applications listed below';
    applicationsList: any[] = [
        {
            applicationId : 1,
            applicationName : 'Illumio',
            applicationText : '',
            // tslint:disable-next-line:max-line-length
            applicationDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.'
        },
        {
            applicationId : 2,
            applicationName : 'Citrix',
            applicationText : '',
            // tslint:disable-next-line:max-line-length
            applicationDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.'
        },
        {
            applicationId : 3,
            applicationName : 'Xen-Desktop',
            applicationText : '',
            // tslint:disable-next-line:max-line-length
            applicationDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.'
        }
    ];
    ngOnInit() { }
}
