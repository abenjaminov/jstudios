import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocsViewComponent} from "./components/docs-view/docs-view.component";

const routes: Routes = [{
  path:'docs',
  component: DocsViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
