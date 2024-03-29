import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'parks', // edit the path name
        children: [
          {
            path: '',
            loadChildren: '../park-list/park-list.module#ParkListPageModule' // edit the module
          }
        ]
      },
      {
        path: 'map', // edit the path name
        children: [
          {
            path: '',
            loadChildren: '../park-map/park-map.module#ParkMapPageModule' // edit the module
          }
        ]
      },
      {
        path: 'details/:id', // edit the path name
        children: [
          {
            path: '',
            loadChildren: '../park-details/park-details.module#ParkDetailsPageModule' // edit the module
          }
        ]
      },
      {
        path: 'details',
        redirectTo: '/tabs/parks',
        pathMatch: 'full'
      },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../tab3/tab3.module#Tab3PageModule'
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/parks', // edit path names, use parks as home page
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/parks', // edit path names, use parks as home page
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
