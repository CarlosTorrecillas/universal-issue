import { NgModule } from "@angular/core";
import { ImageModuleRoutingModule } from "./image-module-routing.module";
import { ImageComponent } from "./image-component/image-component.component";
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        CommonModule,
        ImageModuleRoutingModule,
    ],
    declarations: [
        ImageComponent
    ]
})
export class ImageModuleModule {}
