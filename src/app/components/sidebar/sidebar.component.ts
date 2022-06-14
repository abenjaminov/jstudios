import {Component} from "@angular/core";
import {SidebarComponentData, SidebarComponentService, SidebarItem} from "./sidebar.models";

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {
  componentData: SidebarComponentData;

  selectedItem: SidebarItem;

  constructor(private service: SidebarComponentService) {
  }

  async ngOnInit() {
    this.componentData = await this.service.getComponentData();

    this.componentData.groups[0].isOpen = true;

    this.onItemClicked(this.componentData.groups[0].items[0]);
  }

  onItemClicked(sidebarItem: SidebarItem) {
    if(this.selectedItem)
      this.selectedItem.isSelected = false;

    this.selectedItem = sidebarItem;
    this.service.onItemClicked(sidebarItem);
    this.selectedItem.isSelected = true
  }
}
