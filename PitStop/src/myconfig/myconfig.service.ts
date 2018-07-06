import { Injectable } from '@angular/core';
import { RawDiskConfiguration } from '../rawdiskconfiguration/rawdiskconfiguration.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payload, ConfigruationStep } from '../appenvironmentdetails/appenvironmentdetails.model';
import { Configuration, SavedConfiguration } from './myconfig.model';

@Injectable()
export class MyConfigService {

    constructor(private http: HttpClient) {
    }
    selectedSccmApplications: string[] = [];
    selectedEnvironments: string[] = [];
    rawDiskConfiguration: RawDiskConfiguration;
    configsCount: number;
    sealId: string;
    contactEmail: string;
    configName: string;
    selectedRegions: string[] = [];
    selectedNetworkZones: string[] = [];
    configurationSteps: ConfigruationStep[] = [];
    sortedConfigurationSteps: ConfigruationStep[] = [];

    getHeaders: HttpHeaders = new HttpHeaders(
            {'Accept': 'application/json',
            'Content-Type' : 'application/json'}
        );
    getEventData(): Observable<string> {

        return this.http.get<string>('http://systemcenter-idev.jpmchase.net/WinCMS.API/api/Events?serverName=VSIN7U6909');
    }

    getEventDataById(hostName: string): Observable<string> {
        return this.http.get<string>('http://systemcenter-idev.jpmchase.net/WinCMS.API/api/Events?serverName=' + hostName);
    }

    postPayload(payload: Payload): Observable<Payload> {
        return this.http.post<Payload>('http://systemcenter-idev.jpmchase.net/WinCMS.API/api/Events',
                                            payload , { headers: new HttpHeaders({'Content-Type' : 'application/json'})});
    }

    savePayload(): Observable<Configuration> {
        // Stringify the sorted payload
        for (let i = 0; i < this.sortedConfigurationSteps.length; i++) {
            this.sortedConfigurationSteps[i].sequence = i + 1;
        }

        const configItems =  {
                            'configName': this.configName,
                            'sealId': this.sealId,
                            'selectedRegions': JSON.stringify(this.selectedRegions),
                            'selectedNetworkZones': JSON.stringify(this.selectedNetworkZones),
                            'selectedEnvironments' : JSON.stringify( this.selectedEnvironments),
                            'payload' : JSON.stringify(this.sortedConfigurationSteps)
                            };
        const obj = new Configuration(this.configName, JSON.stringify(configItems), '1.0', 'rreddy', 'rreddy');
        return this.http.post<Configuration>('http://systemcenter-idev.jpmchase.net/ConfigurationManagement/api/configurationBlueprints',
                                            obj , { headers: new HttpHeaders({'Content-Type' : 'application/json'})});
    }

    getAllConfigurations(): Observable<SavedConfiguration[]> {
        return this.http.get<SavedConfiguration[]>
                ('http://systemcenter-idev.jpmchase.net/ConfigurationManagement/api/configurationBlueprints',
                            { headers: new HttpHeaders({'Content-Type' : 'application/json'})});
    }

    clearForms(): any {
        this.configName = '';
        this.selectedSccmApplications = [];
        this.selectedEnvironments = [];
        this.rawDiskConfiguration = new RawDiskConfiguration('', '', '', '');
        this.configsCount = 0;
        this.sealId = '';
        this.contactEmail = '';
        this.configName = '';
        this.selectedRegions = [];
        this.selectedNetworkZones = [];
        this.configurationSteps = [];
        this.sortedConfigurationSteps = [];
     }
}



