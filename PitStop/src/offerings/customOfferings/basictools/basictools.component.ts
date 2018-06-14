import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-basictools',
    templateUrl: './basictools.component.html',
    styleUrls: ['./basictools.component.styles.css']
})

export class BasicToolsComponent implements OnInit {
    constructor() { }
    createYourOwnConfigHeading = 'Create your own configuration';
    basicToolsHeading = 'Choose from basic tools below';
    basicToolsList: any[] = [
        {
            basicToolId : 1,
            basicToolName : 'Raw configuration disk',
            basicToolText : '',
            // tslint:disable-next-line:max-line-length
            basicToolDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            basicToolId : 2,
            basicToolName : 'Setup Registry',
            basicToolText : '',
            // tslint:disable-next-line:max-line-length
            basicToolDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            basicToolId : 3,
            basicToolName : 'IIS Configuration',
            basicToolText : '',
            // tslint:disable-next-line:max-line-length
            basicToolDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        }
    ];
    ngOnInit() { }
}
