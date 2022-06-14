import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DocsService} from "../docs-view/services/docs.service";

@Component({
  selector: 'docs-page',
  templateUrl: 'docs-page.component.html',
  styleUrls: ['docs-page.component.scss']
})
export class DocsPageComponent {

  constructor(public docsService: DocsService) {
  }

  async ngOnInit() {

  }
}
