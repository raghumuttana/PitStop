import { Injectable } from '@angular/core';
import { IEnvironment, IDuration } from './buildreport';


@Injectable()
export class EnvironmentsService {

    getEnvironments(): IEnvironment[] {

        return [
            {
                environmentId  : 1,
                environmentValue : 'DEV',
                environmentText : 'Development environment'
            },
            {
                environmentId  : 2,
                environmentValue : 'SIT',
                environmentText : 'SIT environment'
            },
            {
                environmentId  : 3,
                environmentValue : 'UAT',
                environmentText : 'User Acceptance Test environment'
            },
            {
                environmentId  : 3,
                environmentValue : 'LIVE',
                environmentText : 'Production/Live environment'
            }
        ];
    }
    constructor() { }
}

