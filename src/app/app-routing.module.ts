import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDeatailsComponent } from './user-deatails/user-deatails.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'details/:id', component: UserDeatailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
