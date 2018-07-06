import { Component, OnInit } from '@angular/core';
import { MyConfigService } from '../myconfig/myconfig.service';
import { SavedConfiguration } from '../myconfig/myconfig.model';

@Component({
  selector: 'app-mysavedconfigs',
  templateUrl: './mysavedconfigs.component.html',
  styleUrls: ['./mysavedconfigs.component.css']
})
export class MysavedconfigsComponent implements OnInit {
  savedConfigs: SavedConfiguration[] = [];

  constructor(private _myConfigService: MyConfigService) {
  }

  ngOnInit() {
      this._myConfigService.getAllConfigurations()
                            .subscribe(
                            (data: SavedConfiguration[]) => this.savedConfigs = data,
                            (err: any) => console.log(err),
                            () => console.log('got saved')
                            );
  }
}
