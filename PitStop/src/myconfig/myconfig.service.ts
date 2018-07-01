import { Injectable } from '@angular/core';
import { RawDiskConfiguration } from '../rawdiskconfiguration/rawdiskconfiguration.model';

@Injectable()
export class MyConfigService {

    constructor() { }
    selectedSccmApplications: string[] = [];
    rawDiskConfiguration: RawDiskConfiguration;
    configsCount: number;
}
