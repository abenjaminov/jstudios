import {Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren} from "@angular/core";
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
      $event.preventDefault();
      $event.stopPropagation();
      let parent = $event.target.parentElement;

      const classes = Object.keys(parent.classList).map(x => parent.classList[x]);
      const linkClass = classes.find(x => x.startsWith('jdl'));

      if(linkClass) {
        const parts = linkClass.split('-');
        const docsKey = parts[1];
        const groupKey = parts[2];
        const itemKey = parts[3];

        await this.docsService.goToItem(docsKey, groupKey, itemKey, true);
      }
    }
  }
}
