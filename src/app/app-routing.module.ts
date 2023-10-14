import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/modules/core/about/about.component';
import { HomeComponent } from 'src/modules/core/home/home.component';
import { LoginComponent } from 'src/modules/core/login/login.component';
import { DefaultLayoutComponent } from 'src/modules/shared/layouts/default-layout/default-layout.component';

const routes: Routes = [
  {path: '', component: DefaultLayoutComponent, children: [
    {path: '', component: HomeComponent, children: [
      {path: '', component: HomeComponent}
    ]},
    {path: ':id', component: AboutComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
