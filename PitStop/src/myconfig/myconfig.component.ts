import { Component, OnInit } from '@angular/core';
import { MyConfigService } from './myconfig.service';
import { ConfigItem } from './myconfig.model';
import { RawDiskConfiguration } from '../rawdiskconfiguration/rawdiskconfiguration.model';

@Component({
    selector: 'app-myconfig',
    templateUrl: 'myconfig.component.html'
})

export class MyConfigComponent implements OnInit {
    configItems: any[] = [];

    get showConfigCart(): boolean {
        return this.configItems.length > 0;
    }

    constructor(public _myconfigService: MyConfigService) {
        this.buildSccmAppsPayload();
        this.buildRawDiskConfiguration();
    }

    ngOnInit() {}

    buildSccmAppsPayload(): void {
        if (this._myconfigService.selectedSccmApplications.length > 0) {

        const payload = JSON.stringify( this._myconfigService.selectedSccmApplications);
        const sccmItem = new ConfigItem('Install SCCM Applications:  ', payload);
        this.configItems.push(sccmItem);
        }
    }
    buildRawDiskConfiguration(): void {
        if(this._myconfigService.rawDiskConfiguration != undefined) {
        if ((this._myconfigService.rawDiskConfiguration.blockSizeList !== '') ||
            (this._myconfigService.rawDiskConfiguration.driveLetterList !== '') ||
            (this._myconfigService.rawDiskConfiguration.labelList !== '') ||
            (this._myconfigService.rawDiskConfiguration.sizeList !== '')) {
            const payload = JSON.stringify( this._myconfigService.rawDiskConfiguration);
            const sccmItem = new ConfigItem('Raw Disk Config: ', payload);
            this.configItems.push(sccmItem);
            }
        }
    }
}
