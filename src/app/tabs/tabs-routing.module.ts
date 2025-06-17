import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('../map/map.module').then((m) => m.MapPageModule),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../report/report.module').then((m) => m.ReportPageModule),
      },
      {
        path: 'rewards',
        loadChildren: () =>
          import('../rewards/rewards.module').then((m) => m.RewardsPageModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then((m) => m.SettingsPageModule),
      },
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
