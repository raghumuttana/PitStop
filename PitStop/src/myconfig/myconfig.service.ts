import { Injectable } from '@angular/core';
import { RawDiskConfiguration } from '../rawdiskconfiguration/rawdiskconfiguration.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payload } from '../appenvironmentdetails/appenvironmentdetails.model';

@Injectable()
export class MyConfigService {

    constructor(private http: HttpClient) { }
    selectedSccmApplications: string[] = [];
    selectedEnvironments: string[] = [];
    rawDiskConfiguration: RawDiskConfiguration;
    configsCount: number;
    sealId: string;
    contactEmail: string;
    configName: string;
    selectedRegions: string[] = [];
    selectedNetworkZones: string[] = [];

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

    savePayload(): Observable<Payload> {
        const payload = JSON.stringify([
                           JSON.stringify(new Payload('configName', this.configName)),
                           JSON.stringify(new Payload('sealId', this.sealId)),
                           JSON.stringify(new Payload('selectedSccmApplications', JSON.stringify(this.selectedSccmApplications))),
                           JSON.stringify(new Payload('rawDiskConfiguration', JSON.stringify(this.rawDiskConfiguration))),
                           JSON.stringify(new Payload('selectedRegions', JSON.stringify(this.selectedRegions))),
                           JSON.stringify(new Payload('selectedNetworkZones', JSON.stringify(this.selectedNetworkZones))),
                           JSON.stringify(new Payload('selectedEnvironments', JSON.stringify(this.selectedEnvironments)))]);
        const obj = new Payload(this.configName, payload);
        return this.http.post<Payload>('http://systemcenter-idev.jpmchase.net/WinCMS.API/api/Events',
                                            obj , { headers: new HttpHeaders({'Content-Type' : 'application/json'})});
    }
}


