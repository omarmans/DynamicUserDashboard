import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserDeatailsComponent } from './user-deatails/user-deatails.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HoverColorDirectiveDirective } from './hover-color-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDeatailsComponent,
    SpinnerComponent,
    HoverColorDirectiveDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
