import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocsViewComponent} from "./components/docs-view/docs-view.component";
import {DocsSelectionViewComponent} from "./components/docs-selection-view/docs-selection-view.component";

const routes: Routes = [{
  path:'docs',
  component: DocsSelectionViewComponent
},{
  path: 'docs/:key',
  component: DocsViewComponent
},{
  path:'**',
  redirectTo: 'docs'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
