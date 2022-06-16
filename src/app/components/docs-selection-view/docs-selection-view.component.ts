import {Component} from "@angular/core";
import {docsConfiguration} from "../../docs.configuration";

class DocsInfo {
  name: string;
  key:string;
}

@Component({
  selector: 'docs-selector-view',
  templateUrl: 'docs-selection-view.component.html',
  styleUrls: ['docs-selection-view.component.scss']
})
export class DocsSelectionViewComponent {
  docInfos: Array<DocsInfo>

  constructor() {
  }

  ngOnInit() {
    this.docInfos = [];
    for(let docs of docsConfiguration) {
      this.docInfos.push({
        name: docs.name,
        key: docs.key
      })
    }
  }
}
