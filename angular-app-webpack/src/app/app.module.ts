import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './styles.css'

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    NavbarComponent,
    UsersListComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
