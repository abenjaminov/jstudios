import {Component} from "@angular/core";
import { NavigationService } from "src/app/services/navigation.service";
import {SidebarComponentData, SidebarComponentService, SidebarGroup, SidebarItem} from "./sidebar.models";

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {
  componentData: SidebarComponentData;

  selectedItem: SidebarItem;
  selectedGroup: SidebarGroup;

  constructor(private service: SidebarComponentService, private navigationService: NavigationService) {
    this.service.onUpdated.subscribe(async () => {
      await this.init();
    })
  }

  async ngOnInit() {
    await this.init();
  }

  async init() {
    this.componentData = await this.service.getComponentData();

    this.selectedGroup = this.componentData.groups.find(x => x.isOpen);
    if(!this.selectedGroup)
      this.selectedGroup = this.componentData.groups[0];

    this.selectedGroup.isOpen = true;

    this.selectedItem = this.selectedGroup.items.find(x => x.isSelected);

    if(!this.selectedItem)
      this.selectedItem = this.selectedGroup.items[0];

    this.selectedItem.isSelected = true;

    this.service.changeContext(this.selectedItem);
  }

  onItemClicked(group: SidebarGroup, item: SidebarItem) {
    if(this.selectedItem)
      this.selectedItem.isSelected = false;

    this.selectedItem = item;
    this.service.onItemClicked(group, item);
    this.selectedItem.isSelected = true
  }

  onGroupClicked(group) {
    this.selectedGroup.isOpen = false;
    this.selectedGroup = group;
    this.selectedGroup.isOpen = true;
    const item = this.selectedGroup.items[0];
    this.service.onItemClicked(this.selectedGroup, item);
  }

  onHeaderClicked() {
    this.navigationService.navigateToRoute('')
  }
}
