import {Component} from "@angular/core";
import {docsConfiguration} from "../../docs.configuration";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'docs-selector-view',
  templateUrl: 'docs-selection-view.component.html',
  styleUrls: ['docs-selection-view.component.scss']
})
export class DocsSelectionViewComponent {
  docInfos: Array<DocsInfo>

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.docInfos = [];
    for(let docs of docsConfiguration) {
      this.docInfos.push({
        name: docs.name,
        key: docs.key,
        icon: docs.icon
      })
    }
  }

  onDocsClicked(docs: DocsInfo) {
    this.navigationService.navigateToRoute(`docs/${docs.key}`);
  }
}
