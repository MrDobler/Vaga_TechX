import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';



const APP_ROUTES: Routes = [
    { path: '', component: UserListComponent},
    { path: 'user-details/:login', component: UserDetailsComponent},
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
