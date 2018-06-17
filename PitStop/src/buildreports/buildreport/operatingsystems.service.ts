import { Injectable } from '@angular/core';
import { IOperatingSystem, IDuration } from './buildreport';


@Injectable()
export class OperatingSystemsService {

    getOperatingSystems(): IOperatingSystem[] {

        return  [
            {
                operatingSystemId : 1,
                operatingSystemName : 'Windows Server 2012 R2',
                operatingSystemText : '',
                // tslint:disable-next-line:max-line-length
                operatingSystemDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
                selectButtonText : 'Select'
            },
            {
                operatingSystemId : 2,
                operatingSystemName : 'Windows Server 2008',
                operatingSystemText : '',
                // tslint:disable-next-line:max-line-length
                operatingSystemDescription : 'This bundle has Developer tools like SQL Server, Visual Studio, .NET Framework, Fiddler, Notepadd++. And more detailed description.',
                selectButtonText : 'Select'
            }
        ];
    }
    constructor() { }
}

