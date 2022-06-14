import {Component, ElementRef, QueryList, ViewChildren} from "@angular/core";
import {DocsService} from "../docs-view/services/docs.service";

@Component({
  selector: 'docs-page',
  templateUrl: 'docs-page.component.html',
  styleUrls: ['docs-page.component.scss']
})
export class DocsPageComponent {

  @ViewChildren('code') codeElements: QueryList<any>

  constructor(public docsService: DocsService,private element: ElementRef) {
  }

  async ngOnInit() {

  }

  onMarkdownReady() {

  }
}
