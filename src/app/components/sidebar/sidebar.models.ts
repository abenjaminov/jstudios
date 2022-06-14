export class SidebarGroup {
  name: string;

  items: Array<SidebarItem> = [];
}

export class SidebarItem {
  text: string;
  context: any;
}

export class SidebarComponentData {
  groups: Array<SidebarGroup> = [];
}

export abstract class SidebarComponentService {
  abstract getComponentData(): Promise<SidebarComponentData>;
  abstract onItemClicked(item: SidebarItem);
}
