import {Component} from "@angular/core";
import {NavigationService} from "../../services/navigation.service";

import {StudioItemInfo, studioItemsConfiguration, StudioItemType} from '../../models';

@Component({
  selector: 'docs-selector-view',
  templateUrl: 'studio-selection-view.component.html',
  styleUrls: ['studio-selection-view.component.scss']
})
export class StudioSelectionViewComponent {
  docInfos: Array<StudioItemInfo>

  studioItemsConfiguration = studioItemsConfiguration;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  onStudioItemClicked(docs: StudioItemInfo) {
    if(docs.type == StudioItemType.docs) {
      this.navigationService.navigateToRoute(`docs/${docs.key}`);
    }
    else if(docs.type == StudioItemType.link){
      window.open(docs.context, '_blank').focus();
    }
  }
}
