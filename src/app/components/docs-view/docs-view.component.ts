import {Component} from "@angular/core";
import {SidebarComponentService} from "../sidebar/sidebar.models";
import {DocsViewSidebarService} from "./services/docs-view-sidebar.service";

@Component({
  selector: 'docs-view',
  templateUrl: 'docs-view.component.html',
  styleUrls: ['docs-view.component.scss'],
  providers: [{
    provide: SidebarComponentService, useClass: DocsViewSidebarService
  }]
})
export class DocsViewComponent {

}
