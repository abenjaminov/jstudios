import {SidebarComponentData, SidebarComponentService, SidebarGroup, SidebarItem} from "../../sidebar/sidebar.models";
import {Injectable} from "@angular/core";
import {docsConfiguration} from "../../../docs.configuration";
import {DocsService} from "./docs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationService} from "../../../services/navigation.service";

@Injectable()
export class DocsViewSidebarService extends SidebarComponentService {

  constructor(private docsService: DocsService,
              private navigationService: NavigationService,
              private activatedRoute: ActivatedRoute) {
    super();

    this.docsService.onUpdated.subscribe(() => {
      this.onUpdated.next();
    })
  }

  async getComponentData(): Promise<SidebarComponentData> {
    let result = new SidebarComponentData();

    if(!this.activatedRoute.snapshot.paramMap.has("docsKey")) return result;

    this.docsService.currentDocsKey = this.activatedRoute.snapshot.paramMap.get("docsKey").toString();
    const groupKey = this.activatedRoute.snapshot.paramMap.get("groupKey")?.toString();
    const itemKey = this.activatedRoute.snapshot.paramMap.get("itemKey")?.toString();

    const docs = docsConfiguration.find(x => x.key === this.docsService.currentDocsKey);
    const selectedGroup = docs.groups.find(x => x.key == groupKey)
    let selectedItem = undefined;

    if(selectedGroup)
      selectedItem = selectedGroup.items.find(x => x.key == itemKey);

    for (let group of docs.groups) {
      const newGroup = new SidebarGroup();
      newGroup.name = group.name;
      newGroup.key = group.key;
      if(selectedGroup && group.key == selectedGroup.key) newGroup.isOpen = true;

      for(let item of group.items) {
        const newItem = new SidebarItem();
        newItem.text = item.name;
        newItem.key = item.key;
        newItem.context = item.mdFilePath;

        if(selectedItem && item.key == selectedItem.key) newItem.isSelected = true;

        newGroup.items.push(newItem);
      }

      result.groups.push(newGroup);
    }

    return result;
  }

  changeContext(item: SidebarItem) {
    this.docsService.setDocs(item.context);
  }

  onItemClicked(group: SidebarGroup, item: SidebarItem) {
    this.docsService.goToItem(this.docsService.currentDocsKey, group.key, item.key);
  }
}
