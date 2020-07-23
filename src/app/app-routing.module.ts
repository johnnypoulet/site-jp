import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { RoleType } from 'src/app/services/utils/constantsAndEnums';
import { ProjectManagementComponent } from './components/admin/project-management/project-management.component';
import { ItemManagementComponent } from './components/admin/item-management/item-management.component';
import { AdministrationComponent } from './components/admin/administration/administration.component';

const routes: Routes = [
  {
    path: '',
    data: { roles: [RoleType.Visitor] },
    children: [
      {
        path: '',
        component: AppComponent,
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { roles: [RoleType.Admin] },
    children: [
      {
        path: '',
        component: AdministrationComponent,
      },
      {
        path: 'item/:id',
        component: ItemManagementComponent,
      },
      {
        path: 'project/:id',
        component: ProjectManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
