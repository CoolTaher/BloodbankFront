import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { EntryComponent } from './Components/entry/entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InventoryComponent } from './Components/inventory/inventory.component';
import { MatchComponent } from './Components/match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { FindComponent } from './Components/find/find.component';
import { RequestsComponent } from './Components/requests/requests.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EntryComponent,
    NavbarComponent,
    InventoryComponent,
    MatchComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    FindComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
     ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';