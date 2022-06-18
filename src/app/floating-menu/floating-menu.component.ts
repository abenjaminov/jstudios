import {Component} from "@angular/core";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'floating-menu',
  templateUrl: 'floating-menu.component.html',
  styleUrls: ['floating-menu.component.scss']
})
export class FloatingMenuComponent {
  menuItems = [
    {
      text: 'Home',
      url: 'studio'
    }
  ]

  active: boolean;

  constructor(private navigationService: NavigationService) {
  }

  onMenuButtonClicked() {
    this.active = !this.active;
  }

  onMenuItemClicked(menuItem) {
    this.navigationService.navigateToRoute(menuItem.url);
    this.active = false;
  }

  onBackdropClicked() {
    this.active = false;
  }

  onMenuClicked($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }
}
