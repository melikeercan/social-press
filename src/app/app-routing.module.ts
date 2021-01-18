import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './contents/home/home.component';
import {UserManagementComponent} from './contents/user-management/user-management.component';
import {ActivityHistoryComponent} from './contents/activity-history/activity-history.component';
import {PopularComponent} from './contents/popular/popular.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserManagementComponent },
  { path: 'activity', component: ActivityHistoryComponent },
  { path: 'popular', component: PopularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
