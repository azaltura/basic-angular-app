import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { RedisterComponent } from './redister/redister.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'redister', component: RedisterComponent },
  { path: 'member', component: MemberComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
