import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { JsonLdService } from '../services/json-ld.service';
import { NgIf } from '@angular/common';
@Component({
    standalone: true,
    selector: 'app-json-ld',
    templateUrl: 'json-ld.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf],
    providers: [JsonLdService]
})
export class JsonLdComponent implements OnInit {
    @Input() jsonLdData: any;
    jsonLdMicrodata: SafeHtml;

    constructor(@Inject(PLATFORM_ID) private platformId: Object,
                private jsonLdService: JsonLdService) {}

    ngOnInit(): void {
        this.jsonLdMicrodata = this.jsonLdService.getSafeHtml(this.jsonLdData);
    }
}
