import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-image-component',
    templateUrl: 'image-component.component.html',
})
export class ImageComponent implements OnInit {
    imageUrl: string;
    width: number;
    height: number;
    ngOnInit() { 
        const image = new Image();
        image.onload = () => {
            this.height = 75;
            this.width = image.width * this.height / image.height;
            this.imageUrl = image.src;
        }
        image.src = 'https://angular.io/assets/images/logos/angular/angular.svg';
    }
}