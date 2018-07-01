import { Component, OnInit, OnChanges } from '@angular/core';
import { SccmApplicationsService } from './sccmapplications.service';
import { NgForm } from '@angular/forms';
import { MyConfigService } from '../myconfig/myconfig.service';

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
            this._sccmApplicationsService.callWindowsDeploymentAPI(element.toString());
            this._myConfigService.configsCount++;
        });
    }
}
