import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-template',
    templateUrl: 'template.component.html',
    standalone: true,
})

export class TemplateComponent implements OnInit {
    @ViewChild('template', { static: true }) template: TemplateRef<unknown>;

    constructor(private viewContainerRef: ViewContainerRef) { }
      
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
