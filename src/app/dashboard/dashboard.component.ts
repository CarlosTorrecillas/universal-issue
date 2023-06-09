import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  jsonLd: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5);
        this.jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'My organization',
          'legalName' : 'Organisation LTD',
          'url': 'http://www.organization.com',
          'logo': 'http://www.organization.com/assets/logo.webp',
          'foundingDate': '2023',
          'founders': [
              {
                  '@type': 'Person',
                  'name': 'Carlos Torrecillas'
              }
          ]
      };
      });
  }
}
