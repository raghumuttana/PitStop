import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-progresstracker',
    templateUrl: 'progresstracker.component.html',
    styleUrls: ['./progresstracker.component.css']
})

export class ProgressTrackerComponent implements OnInit {
    constructor(private _route: ActivatedRoute,
                private _router: Router) {
     }
    selectedWorkFlow = '';
    onBack(): void {
        this._router.navigate(['/buildreport']);
    }

    ngOnInit() {
        this.selectedWorkFlow  = this._route.snapshot.paramMap.get('id');
    }
}
