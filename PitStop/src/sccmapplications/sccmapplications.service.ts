import { Injectable } from '@angular/core';
import { ISccmApplication } from './SccmApplication';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable()
export class SccmApplicationsService {
    winAPIUrl = 'http://localhost:25506/Execute/OnDemandDeployment';
    constructor(private httpClient: HttpClient) { }

    getSccmApplications(): ISccmApplication[] {
        return [
            {
                ApplicationId : 1,
                ApplicationTitle : 'Illumio-VirtualEnforcementNode-17-1-R4',
                Checked: false
            },
            {
                ApplicationId : 2,
                ApplicationTitle : 'JPMC-AIM-2-0-2366-R4',
                Checked: false
            },
            {
                ApplicationId : 3,
                ApplicationTitle : 'Citrix-XenApp-XenDesktop-7-15',
                Checked: false
            }
        ];
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response) {
        console.error('post error: ', error);
        return Observable.throw(error.statusText);
    }

    callWindowsDeploymentAPI(payload: string) {
         console.log(payload);
        // const guid = Guid.newGuid();
        // const PayLoadName = 'payloadName1';
        // const TargetHost = 'h1';
        // const ApplicationTitle = payload;
        // const OnDemandDeploymentObject = new OnDemandDeploymentPostObject(PayLoadName, ApplicationTitle, TargetHost);
        // const body = JSON.stringify(OnDemandDeploymentObject);
        // tslint:disable-next-line:max-line-length
        // const headers = new Headers({'Content-Type': 'application/json', 'Accept' : 'application/json', 'CorrelationId': guid, 'Access-Control-Allow-Origin': '*'});
        // const options = new RequestOptions({headers: headers});
        // return ; //this.httpClient.post(this.winAPIUrl, body, options);
    }

}
