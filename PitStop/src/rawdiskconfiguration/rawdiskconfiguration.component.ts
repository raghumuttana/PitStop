import { Component, OnInit } from '@angular/core';
import { RawDiskConfiguration } from './rawdiskconfiguration.model';
import { NgForm } from '@angular/forms';
import { MyConfigService } from '../myconfig/myconfig.service';
import { ConfigruationStep } from '../appenvironmentdetails/appenvironmentdetails.model';

@Component({
    selector: 'app-rawdiskconfiguration',
    templateUrl: 'rawdiskconfiguration.component.html'
})

export class RawDiskConfigurationComponent implements OnInit {
    model = (this._myConfigSvc.rawDiskConfiguration !== undefined) ? (new RawDiskConfiguration(
        this._myConfigSvc.rawDiskConfiguration.blockSizeList === undefined ? '1' : this._myConfigSvc.rawDiskConfiguration.blockSizeList  ,
        this._myConfigSvc.rawDiskConfiguration.driveLetterList === undefined ? '2' : this._myConfigSvc.rawDiskConfiguration.driveLetterList,
        this._myConfigSvc.rawDiskConfiguration.labelList === undefined ? '3' : this._myConfigSvc.rawDiskConfiguration.labelList,
        this._myConfigSvc.rawDiskConfiguration.sizeList === undefined ? '4' : this._myConfigSvc.rawDiskConfiguration.sizeList))
            : new RawDiskConfiguration('1', '2', '3', '4');

    constructor(private _myConfigSvc: MyConfigService) { }

    ngOnInit() { }

    ToUpperCaseDriveLetters(value: string) {
        // tslint:disable-next-line:whitespace
        if(value.length > 0) {
         this.model.driveLetterList = value.toUpperCase();
        } else {
        this.model.driveLetterList = value;
        }
    }

    submitForm(form: NgForm) {
        this._myConfigSvc.rawDiskConfiguration = this.model;
        // remove the existing rawdiskconfigruation step
        const rawdiskconfigurationStep  = new ConfigruationStep(0, 'rawdiskconfiguration', JSON.stringify(this.model));
        const index = this._myConfigSvc.configurationSteps.findIndex( x => x.microserviceName === 'rawdiskconfiguration');
        this._myConfigSvc.configurationSteps.splice(index, 1);
        // add the new rawdiskconfiguration step
        this._myConfigSvc.configurationSteps.push(rawdiskconfigurationStep);
    }
}
