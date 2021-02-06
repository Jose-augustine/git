import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { BottomComponent } from './bottom/bottom.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent,
    AddTaskComponent,
    BottomComponent,
    HomePageComponent,
    TaskPoolComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
