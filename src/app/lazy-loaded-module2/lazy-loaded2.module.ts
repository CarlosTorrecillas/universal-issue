import { NgModule } from "@angular/core";
import { LazyLoaded2RoutingModule } from "./lazy-loaded2-routing.module";
import { LazyLoaded2Component } from "./lazy-loaded2/lazy-loaded2.component";
@NgModule({
    imports: [
        LazyLoaded2RoutingModule,
    ],
    declarations: [
        LazyLoaded2Component
    ]
})
export class LazyLoaded2Module {}
