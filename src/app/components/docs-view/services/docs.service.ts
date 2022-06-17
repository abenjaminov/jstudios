import {Injectable} from "@angular/core";
import {NavigationService} from "../../../services/navigation.service";
import {BehaviorSubject, ReplaySubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  onUpdated: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  currentDocsKey: string;
  selectedDocsPath: string

  constructor(private navigationService: NavigationService) {
  }

  setDocs(mdFilePath: string) {
    this.selectedDocsPath = mdFilePath;
  }

  async goToItem(docsKey:string, groupKey: string, itemKey: string) {
    await this.navigationService.navigateToRoute(`docs/${docsKey}/${groupKey}/${itemKey}`)
    this.onUpdated.next();
  }
}
