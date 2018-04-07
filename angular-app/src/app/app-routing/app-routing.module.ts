import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyComponent } from '../empty/empty.component';
import { UsersListComponent } from '../users-list/users-list.component';

const routes: Routes = [
  { path: '', component: EmptyComponent, pathMatch: 'full' },
  { path: 'users/list', component: UsersListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
