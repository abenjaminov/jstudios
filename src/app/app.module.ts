import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHeaderComponent} from "./components/app-header/app-header.component";
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DocsPageComponent} from "./components/docs-page/docs-page.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {DocsViewComponent} from "./components/docs-view/docs-view.component";
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {HljsDirective} from "./directives/hljs.directive";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DocsPageComponent,
    SidebarComponent,
    DocsViewComponent,
    HljsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule,
    HighlightModule
  ],
  providers: [
    {
      provide:HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          csharp: () => import('highlight.js/lib/languages/csharp')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
