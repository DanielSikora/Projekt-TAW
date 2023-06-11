import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {autoTraderComponent} from "./components/autoTrader/autoTrader.component";
import {autoTraderItemDetailsComponent} from "./components/autoTrader-item-details/autoTrader-item-details.component";
import {autoTraderHomeComponent} from "./components/autoTrader-home/autoTrader-home.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AddPostComponent} from "./components/add-post/add-post.component";
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'autoTrader',
    component: autoTraderHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'autoTrader/detail/:id',
    component: autoTraderItemDetailsComponent
  },
  {
    path: 'addPost',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
