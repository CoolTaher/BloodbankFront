import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EntryComponent } from './Components/entry/entry.component';
import { ErrorComponent } from './Components/error/error.component';
import { FindComponent } from './Components/find/find.component';
import { HomeComponent } from './Components/home/home.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { LoginComponent } from './Components/login/login.component';
import { MatchComponent } from './Components/match/match.component';
import { RequestsComponent } from './Components/requests/requests.component';
import { AdminGuard } from './Guard/admin.guard';
import { AuthGuard } from './Guard/auth.guard';
import { UserGuard } from './Guard/user.guard';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'details',canActivate:[AuthGuard], component:EntryComponent},
  {path:'inventory',canActivate:[AuthGuard],component:InventoryComponent},
  {path:'match',canActivate:[AuthGuard],component:MatchComponent},
  {path:'home',component:HomeComponent},
  {path:'FindDonor',component:FindComponent},
  {path:'history',component:RequestsComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
