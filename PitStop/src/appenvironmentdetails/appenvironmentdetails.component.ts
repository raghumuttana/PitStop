import { Component, OnInit } from '@angular/core';
import { MyConfigService } from '../myconfig/myconfig.service';
import { NgForm } from '@angular/forms';
import {  Configuration } from '../myconfig/myconfig.model';


@Component({
  selector: 'app-appenvironmentdetails',
  templateUrl: './appenvironmentdetails.component.html',
  styleUrls: ['./appenvironmentdetails.component.css']
})
export class AppenvironmentdetailsComponent implements OnInit {

  get selectedEnvironments(): string[] {
      return this._myConfigService.selectedEnvironments;
  }

  set selectedApplications(value: string[]) {
    this._myConfigService.selectedSccmApplications = value;
  }

  get selectedRegions(): string[] {
    return this._myConfigService.selectedRegions;
    }

    set selectedRegions(value: string[]) {
    this._myConfigService.selectedNetworkZones = value;
    }

    get selectedNetworkZones(): string[] {
      return this._myConfigService.selectedNetworkZones;
    }

    set selectedNetworkZones(value: string[]) {
      this._myConfigService.selectedNetworkZones = value;
    }

  get configName(): string {
    return this._myConfigService.configName;
  }

  set configName(value: string) {
  this._myConfigService.configName = value;
  }

  get contactEmail(): string {
    return this._myConfigService.contactEmail;
  }

  set contactEmail(value: string) {
  this._myConfigService.contactEmail = value;
  }

  get sealId(): string {
    return this._myConfigService.sealId;
  }

  set sealId(value: string) {
  this._myConfigService.sealId = value;
  }


  dataCentersList: any[] = [
      {
          datacenterId  : 1,
          datacenterValue : 'AP-SG-C01 Data Center (Singapore, SGP)',
          datacenterText : 'Some Description about the data center'
      },
      {
          datacenterId  : 1,
          datacenterValue : 'Carlstadt Data Center (Carlstadt, NJ)',
          datacenterText : 'Some Description about the data center'
      },
      {
          datacenterId  : 1,
          datacenterValue : 'CDC1 (Bear, DE)',
          datacenterText : 'Some Description about the data center'
      }
    ];

  environmentList: any[] = [
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
          environmentValue : 'PROD',
          environmentText : 'Production/Live environment'
      }
  ];

  regionList: any[] = [
    {
        regionId  : 1,
        regionValue : 'ASIAPAC',
        regionText : 'ASIAPAC'
    },
    {
        regionId  : 2,
        regionValue : 'NAEAST',
        regionText : 'NAEAST'
    }
  ];

  networkZoneList: any[] = [
    {
        networkZoneId  : 1,
        networkZoneValue : 'ESF',
        networkZoneText : 'ESF'
    },
    {
        networkZoneId  : 2,
        networkZoneValue : 'SESF',
        networkZoneText : 'SESF'
    }
  ];

  temp: Configuration;

  constructor(private _myConfigService: MyConfigService) {
  }

  ngOnInit() {
  }
  updateSelectedEnvironments(event) {
    if (event.target.checked) {
          if (this.selectedEnvironments.indexOf(event.target.value) < 0) {
            this.selectedEnvironments.push(event.target.value);
          }
     } else {
           if (this.selectedEnvironments.indexOf(event.target.value) > -1) {
                this.selectedEnvironments.splice(this.selectedEnvironments.indexOf(event.target.value), 1);
            }
    }
  }
 updateSelectedRegions(event) {
    if (event.target.checked) {
          if (this.selectedRegions.indexOf(event.target.value) < 0) {
            this.selectedRegions.push(event.target.value);
          }
     } else {
           if (this.selectedRegions.indexOf(event.target.value) > -1) {
                this.selectedRegions.splice(this.selectedRegions.indexOf(event.target.value), 1);
            }
    }
  }
  updateSelectedNetworkZones(event) {
    if (event.target.checked) {
          if (this.selectedNetworkZones.indexOf(event.target.value) < 0) {
            this.selectedNetworkZones.push(event.target.value);
          }
     } else {
           if (this.selectedNetworkZones.indexOf(event.target.value) > -1) {
                this.selectedNetworkZones.splice(this.selectedNetworkZones.indexOf(event.target.value), 1);
            }
    }
  }

  submitForm(form: NgForm) {
    this._myConfigService.savePayload()
    .subscribe(
      (data => this.temp = data),
      (err: any) => console.log(err),
      () => this._myConfigService.clearForms()
    );
   }
}
