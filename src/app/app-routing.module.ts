import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

// STEP 3 
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "question/:id",
    component: QuestionComponent
  },
  {
    path: "result",
    component: ResultComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];
// STEP 4 

// STEP 5
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
