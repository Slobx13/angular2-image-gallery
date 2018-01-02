import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ImageService} from "./services/image.service";
import {GalleryComponent} from "./gallery/gallery.component";
import {ViewerComponent} from "./viewer/viewer.component";
import {DemoComponent} from "./demo/demo.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    GalleryComponent,
    ViewerComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [
    DemoComponent
  ],
  exports: [
    GalleryComponent,
    ViewerComponent
  ]
})
export class Angular2ImageGalleryModule {
}
