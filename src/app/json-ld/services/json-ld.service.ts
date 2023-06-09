import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class JsonLdService {
    constructor(private sanitizer: DomSanitizer) {}

    getSafeHtml(jsonLd: {[key: string]: any}): SafeHtml {
        const json = jsonLd ? JSON.stringify(jsonLd, null, 2) : '';
        const html = `<script type="application/ld+json">${json}</script>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
