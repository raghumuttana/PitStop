import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }
)
export class AppComponent implements OnInit {
  config = {
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 500
  };
  pageTitle = 'ICP Build Report';
  items: any[];
  ngOnInit() {
    this.items =  this.getCategories();
}


getCategories(): TreeviewItem[] {
  const childrenCategory = new TreeviewItem({
      text: 'Server Role', value: 1, checked: false, collapsed: false, children: [
          { text: 'Raw Disk Configuration', checked: false, value: 11 },
          { text: 'Clustering', checked: false, value: 12, children :
                        [{text: 'Add Node to Cluster', checked: false, value: 13},
                         {text: 'Create a Cluster', checked: false, value: 14}]}
      ]
  });
  const itCategory = new TreeviewItem({
    text: 'DSC Configuration', value: 2, checked: false, collapsed: false, children: [
        { text: 'Upload DSC', checked: false, value: 22 },
        { text: 'Create New DSC', checked: false, value: 12 }
    ]
  });
//   const teenCategory = new TreeviewItem({
//       text: 'Teen', value: 2, collapsed: true, disabled: true, children: [
//           { text: 'Adventure', value: 21 },
//           { text: 'Science', value: 22 }
//       ]
//   });
  return [childrenCategory, itCategory];
}

}

