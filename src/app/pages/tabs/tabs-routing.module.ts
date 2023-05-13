import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'binds',
        loadChildren: () => import('./binds/binds.module').then(m => m.BindsPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/binds',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/binds',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
