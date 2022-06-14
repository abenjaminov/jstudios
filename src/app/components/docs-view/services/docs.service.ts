import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class DocsService {
  selectedDocs: string

  setDocs(mdFilePath: string) {
    this.selectedDocs = mdFilePath;
  }
}
