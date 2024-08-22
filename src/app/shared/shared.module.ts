import { NgModule } from "@angular/core";
import { TimeAgoPipe } from "./pipes/time-ago.pipe";
import { ImgComponent } from "./components/img/img.component";
import { CommonModule } from "@angular/common";
import { IntersectionObserverDirective } from "./directives/intersection-observer.directive";

@NgModule({
  declarations: [
    TimeAgoPipe,
    ImgComponent,
    IntersectionObserverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgoPipe,
    ImgComponent,
    IntersectionObserverDirective
  ]
})
export class SharedModule { }
