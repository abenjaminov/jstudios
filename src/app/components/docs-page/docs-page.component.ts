import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {DocsService} from "../docs-view/services/docs.service";

@Component({
  selector: 'docs-page',
  templateUrl: 'docs-page.component.html',
  styleUrls: ['docs-page.component.scss']
})
export class DocsPageComponent {

  @ViewChild('docsPage') docsPageElement: ElementRef

  constructor(public docsService: DocsService, private element: ElementRef) {
  }

  async ngOnInit() {

  }

  onMarkdownReady() {
    setTimeout(() => {
      this.docsPageElement.nativeElement.children[0].scrollIntoView({
        behavior: "smooth"
      });
    },1);
  }

  async onClicked($event) {

    if($event.target.localName === 'code') {
      let parent = $event.target.parentElement;

      const classes = Object.keys(parent.classList).map(x => parent.classList[x]);
      const linkClass = classes.find(x => x.startsWith('jstudios-docs-link'));

      if(linkClass) {
        const parts = linkClass.split('-');
        const docsKey = parts[3];
        const groupKey = parts[4];
        const itemKey = parts[5];

        await this.docsService.goToItem(docsKey, groupKey, itemKey);
      }
    }
  }
}
