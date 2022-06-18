import {Component} from "@angular/core";
import {SidebarComponentService} from "../sidebar/sidebar.models";
import {DocsViewSidebarService} from "./services/docs-view-sidebar.service";
import {DocsService} from "./services/docs.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'docs-view',
  templateUrl: 'docs-view.component.html',
  styleUrls: ['docs-view.component.scss'],
  providers: [{
    provide: SidebarComponentService, useClass: DocsViewSidebarService
  }]
})
export class DocsViewComponent {

  constructor(private docsService: DocsService, private router: Router) {

  }
}
