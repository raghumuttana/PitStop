import { RawDiskConfiguration } from '../rawdiskconfiguration/rawdiskconfiguration.model';

export class ConfigItem {
    constructor(public Category: string,
                public Payload: string) {}
}


export class Configuration {
    constructor(public configName: string,
                public sealId: string,
                selectedEnvironments: string[],
                public EventPayload: string,
                selectedRegions: string[],
                selectedNetworkZones: string[],
                rawDiskConfiguration: RawDiskConfiguration,
                selectedSccmApplications: string[]) {}
}

