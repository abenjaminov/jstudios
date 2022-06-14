import {SidebarComponentData, SidebarComponentService, SidebarGroup, SidebarItem} from "../../sidebar/sidebar.models";
import {Injectable} from "@angular/core";
import {docsConfiguration} from "../../../docs.configuration";
import {DocsService} from "./docs.service";

@Injectable()
export class DocsViewSidebarService extends SidebarComponentService{
  constructor(private docsService: DocsService) {
    super();
  }

  async getComponentData(): Promise<SidebarComponentData> {
    let result = new SidebarComponentData();

    for (let doc of docsConfiguration) {
      const newGroup = new SidebarGroup();
      newGroup.name = doc.name;

      for(let section of doc.sections) {
        const newItem = new SidebarItem();
        newItem.text = section.name;
        newItem.context = section.mdFilePath;

        newGroup.items.push(newItem);
      }

      result.groups.push(newGroup);
    }

    return result;
  }

  onItemClicked(item: SidebarItem) {
    this.docsService.setDocs(item.context);
  }
}
