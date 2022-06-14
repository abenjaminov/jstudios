import {Component} from "@angular/core";
import {SidebarComponentData, SidebarComponentService, SidebarItem} from "./sidebar.models";

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent {
  componentData: SidebarComponentData;
  constructor(private service: SidebarComponentService) {
  }

  async ngOnInit() {
    this.componentData = await this.service.getComponentData();
  }

  onItemClicked(sidebarItem: SidebarItem) {
    this.service.onItemClicked(sidebarItem);
  }
}
