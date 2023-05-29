import { Component, Injector, OnInit, ViewChild, ViewContainerRef, createNgModule } from '@angular/core';

@Component({
    selector: 'app-lazy-loaded',
    templateUrl: 'lazy-loaded.component.html'
})
export class LazyLoadedComponent implements OnInit {
    @ViewChild('lazy', {read: ViewContainerRef}) lazy: ViewContainerRef;

    constructor(private injector: Injector) { }

    async ngOnInit() { 
        const {LazyLoaded2Module} = await import('../../lazy-loaded-module2/lazy-loaded2.module');
        const {LazyLoaded2Component} = await import('../../lazy-loaded-module2/lazy-loaded2/lazy-loaded2.component');
        const moduleRef = createNgModule(LazyLoaded2Module, this.injector);
        this.lazy.createComponent(LazyLoaded2Component, {ngModuleRef: moduleRef});
    }
}