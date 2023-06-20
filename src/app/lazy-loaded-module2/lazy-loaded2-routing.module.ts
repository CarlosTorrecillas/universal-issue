import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LazyLoaded2Component } from "./lazy-loaded2/lazy-loaded2.component";
import { TemplateComponent } from "./template/template.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LazyLoaded2Component,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyLoaded2RoutingModule {}
