import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LazyLoadedComponent } from "./lazy-loaded/lazy-loaded.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LazyLoadedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyLoadedRoutingModule {}
