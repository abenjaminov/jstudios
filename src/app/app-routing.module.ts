import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocsViewComponent} from "./components/docs-view/docs-view.component";
import {StudioSelectionViewComponent} from "./components/studio-selection-view/studio-selection-view.component";

const routes: Routes = [{
  path:'studio',
  component: StudioSelectionViewComponent
},{
  path: 'docs/:docsKey',
  component: DocsViewComponent
},{
  path: 'docs/:docsKey/:groupKey',
  component: DocsViewComponent
},{
  path: 'docs/:docsKey/:groupKey/:itemKey',
  component: DocsViewComponent
},{
  path:'**',
  redirectTo: 'studio'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
