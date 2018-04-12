import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyComponent } from '../empty/empty.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: EmptyComponent, pathMatch: 'full' },
  { path: 'users/list', component: UsersListComponent, pathMatch: 'full' },
  { path: 'users/:userId', component: UserDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
