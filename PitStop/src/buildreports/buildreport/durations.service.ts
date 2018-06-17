import { IDuration } from './buildreport';
import { Injectable } from '@angular/core';

@Injectable()
export class DurationService {

    getDurations(): IDuration[] {

        return  [
            {
                durationId  : 1,
                durationValue : 15,
                durationText : '15 mins ago'
            },
            {
                durationId  : 2,
                durationValue : 30,
                durationText : '30 mins ago'
            },
            {
                durationId  : 3,
                durationValue : 45,
                durationText : '45 mins ago'
            },
            {
                durationId  : 4,
                durationValue : 60,
                durationText : '1 Hour ago'
            },
            {
                durationId  : 5,
                durationValue : 600000,
                durationText : 'Older than 1 hour'
            }
        ] ;
    }
    constructor() { }
}
