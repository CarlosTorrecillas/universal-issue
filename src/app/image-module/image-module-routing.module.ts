import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ImageComponent } from "./image-component/image-component.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ImageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageModuleRoutingModule {}
