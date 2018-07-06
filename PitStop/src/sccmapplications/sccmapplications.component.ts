import { Component, OnInit, OnChanges } from '@angular/core';
import { SccmApplicationsService } from './sccmapplications.service';
import { NgForm } from '@angular/forms';
import { MyConfigService } from '../myconfig/myconfig.service';
import { ConfigruationStep } from '../appenvironmentdetails/appenvironmentdetails.model';

@Component({
    selector: 'app-sccmapplications',
    templateUrl: './sccmapplications.component.html'
})

export class SccmApplicationListComponent implements OnInit {
    get selectedApplications(): string[] {
        return this._myConfigService.selectedSccmApplications;
    }

    set selectedApplications(value: string[]) {
        this._myConfigService.selectedSccmApplications = value;
    }

    constructor(private _sccmApplicationsService: SccmApplicationsService,
                private _myConfigService: MyConfigService) {
    }
    sccmApplicationListHeading = 'List of Applications available for installation from SCCM';
    sccmApplicationsList: any[] ;
    ngOnInit() {
        this.sccmApplicationsList = this._sccmApplicationsService.getSccmApplications();
    }

    updateSelectedSccmApplications(event) {
        if (event.target.checked) {
              if (this.selectedApplications.indexOf(event.target.value) < 0) {
                this.selectedApplications.push(event.target.value);
              }
         } else {
               if (this.selectedApplications.indexOf(event.target.value) > -1) {
                    this.selectedApplications.splice(this.selectedApplications.indexOf(event.target.value), 1);
                }
        }
    }

    submitForm(form: NgForm) {
        this.selectedApplications.forEach(element => {
            this._myConfigService.configsCount++;
        });

        const sccmApplicationsStep  = new ConfigruationStep(0, 'installapplicationssccm', JSON.stringify(this.selectedApplications));
        const index = this._myConfigService.configurationSteps.findIndex( x => x.microserviceName === 'installapplicationssccm');
        if (index > -1) {
            this._myConfigService.configurationSteps.splice(index, 1);
        }
        // add the new rawdiskconfiguration step
        this._myConfigService.configurationSteps.push(sccmApplicationsStep);
    }
}
