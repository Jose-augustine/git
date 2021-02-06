import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TaskPoolComponent } from './task-pool/task-pool.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
	{path:'home', component: HomePageComponent},
	{path:'addTask', component: AddTaskComponent},
	{path:'addPool', component: TaskPoolComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
