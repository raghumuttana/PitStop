import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-featuredlist',
    templateUrl: './featured-list.component.html'
})

export class FeaturedListComponent implements OnInit {
    constructor() { }
    featuredListTitle  = 'Our curated list of frequently used configurations';
    featuredList: any[] = [
        {
            featuredListId : 1,
            featuredListName : 'Dev Utilities',
            featuredListText : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework',
            // tslint:disable-next-line:max-line-length
            featuredListDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            featuredListId : 2,
            featuredListName : 'DBA Daily machine',
            featuredListText : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework',
            // tslint:disable-next-line:max-line-length
            featuredListDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            featuredListId : 3,
            featuredListName : 'Operations toolset',
            featuredListText : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework',
            // tslint:disable-next-line:max-line-length
            featuredListDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            featuredListId : 4,
            featuredListName : 'Managers VDI',
            featuredListText : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework',
            // tslint:disable-next-line:max-line-length
            featuredListDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            featuredListId : 5,
            featuredListName : 'CEO\'s Travel Machine',
            featuredListText : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework',
            // tslint:disable-next-line:max-line-length
            featuredListDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        },
        {
            featuredListId : 6,
            featuredListName : 'Devils Workshop',
            featuredListText : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework',
            // tslint:disable-next-line:max-line-length
            featuredListDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
            selectButtonText : 'Select'
        }

    ];
    ngOnInit() { }
}
