import { NgModule } from "@angular/core";
import { LazyLoadedRoutingModule } from "./lazy-loaded-routing.module";
import { LazyLoadedComponent } from "./lazy-loaded/lazy-loaded.component";
@NgModule({
    imports: [
        LazyLoadedRoutingModule,
    ],
    declarations: [
        LazyLoadedComponent
    ]
})
export class LazyLoadedModule {}
