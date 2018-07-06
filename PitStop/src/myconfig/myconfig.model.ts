import { RawDiskConfiguration } from '../rawdiskconfiguration/rawdiskconfiguration.model';

export class ConfigItem {
    constructor(public Category: string,
                public Payload: string) {}
}


export class Configuration3 {
    constructor(public configName: string,
                public sealId: string,
                selectedEnvironments: string[],
                public EventPayload: string,
                selectedRegions: string[],
                selectedNetworkZones: string[],
                rawDiskConfiguration: RawDiskConfiguration,
                selectedSccmApplications: string[]) {}
}


export class Configuration {
    constructor(public ConfigName: string,
                public ConfigValue: string,
                public Version: string,
                public CreatedBy: string,
                public ModifiedBy: string
            ) {}
}
export class SavedConfiguration {
    constructor(public ConfigName: string,
                public ConfigValue: string,
                public Version: string,
                public CreatedBy: string,
                public ModifiedBy: string,
                public CreatedDate: string,
                public ModifiedDate: string
            ) {}
}
