import {Injectable} from "@angular/core";


@Injectable()
export class DocsViewComponentService {
  selectedDocs: string

  setDocs(mdFilePath: string) {
    this.selectedDocs = mdFilePath;
  }
}
