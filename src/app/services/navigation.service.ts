import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {
  }

  async navigateToRoute(route:string, params? : Array<string>) {
    await this.router.navigate([route]);
  }
}
