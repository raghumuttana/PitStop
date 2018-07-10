import { Component, OnInit } from '@angular/core';
import { MyConfigService } from '../myconfig/myconfig.service';
import { SavedConfiguration } from '../myconfig/myconfig.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mysavedconfigs',
  templateUrl: './mysavedconfigs.component.html',
  styleUrls: ['./mysavedconfigs.component.css','./mysavedconfigs.component.scss']
})
export class MysavedconfigsComponent implements OnInit {
  savedConfigs: SavedConfiguration[] = [];
  showLoader = true;
  constructor(private _myConfigService: MyConfigService) {
  }

  ngOnInit() {
    this._myConfigService.getAllConfigurations()
                            .subscribe(
                            (data: SavedConfiguration[]) => this.savedConfigs = data,
                            (err: any) => {console.log(err); this.showLoader = false; },
                            () => {console.log('got saved') ; this.showLoader = false; }
                            );
  }
}
