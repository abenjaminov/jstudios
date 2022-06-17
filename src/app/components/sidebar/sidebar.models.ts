import {BehaviorSubject} from "rxjs";

export class SidebarGroup {
  name: string;
  key: string;
  items: Array<SidebarItem> = [];

  isOpen?: boolean;
}

export class SidebarItem {
  text: string;
  key: string;
  context: any;

  isSelected?: boolean;
}

export class SidebarComponentData {
  groups: Array<SidebarGroup> = [];
}

export abstract class SidebarComponentService {
  onUpdated: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  abstract getComponentData(): Promise<SidebarComponentData>;
  abstract changeContext(item: SidebarItem);
  abstract onItemClicked(group: SidebarGroup, item: SidebarItem);
}
