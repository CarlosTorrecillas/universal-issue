import { NgTemplateOutlet, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-template, [my-results]',
    templateUrl: 'template.component.html',
    standalone: true,
    imports: [
        NgTemplateOutlet
    ],
    styleUrls: [
        'template.component.scss'
    ]
})
export class TemplateComponent implements OnInit {
    @ViewChild('template', { static: true }) template: TemplateRef<unknown>;

    constructor(private viewContainerRef: ViewContainerRef,
                @Inject(PLATFORM_ID) private platformId: object) { }
      
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        //this.viewContainerRef.element.nativeElement.remove();
    }
}
