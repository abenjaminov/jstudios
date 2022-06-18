import {Injectable} from "@angular/core";
import {NavigationService} from "../../../services/navigation.service";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  onUpdated: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  currentDocsKey: string;
  selectedDocsPath: string

  constructor(private navigationService: NavigationService, private router: Router) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.onUpdated.next();
      }
    })
  }

  setDocs(mdFilePath: string) {
    this.selectedDocsPath = mdFilePath;
  }

  async goToItem(docsKey:string, groupKey: string, itemKey: string, isNewTab: boolean = false) {
    const path = `docs/${docsKey}/${groupKey}/${itemKey}`;
    if(isNewTab) {
      const url = `${location.origin}/${path}`;
      window.open(url, '_blank').focus();
    }
    else {
      await this.navigationService.navigateToRoute(path)
    }
  }
}
