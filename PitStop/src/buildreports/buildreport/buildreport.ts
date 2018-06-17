// tslint:disable-next-line:no-empty-interface
export interface IBuildReport {
    // operatingSystemsList: IOperatingSystem[];
    // durationsList: IDuration[];
    // environmentsList: IEnvironment[];
    // dataCentersList: IDatacenter[];
    // statusList: IStatus[];
}

export interface IOperatingSystem {
    operatingSystemId: number;
    operatingSystemName: string;
    operatingSystemText: string;
    operatingSystemDescription: string;
    selectButtonText: string;
}

export interface IDuration {
    durationId: number;
    durationValue: number;
    durationText: string;
}

export interface IEnvironment {
    environmentId: number;
    environmentValue: string;
    environmentText: string;
}

export interface IDatacenter {
    datacenterId: number;
    datacenterValue: string;
    datacenterText: string;
}

export interface IStatus {
    statusId: number;
    statusValue: string;
    statusText: string;
}
