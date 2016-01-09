import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
    <p>Всего {{ heroCount }} записей</p>
  </div>`,
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
    constructor(private _heroService: HeroService) {

    }
    public hero: Hero;
    public heroCount: number;
    
    ngOnInit() {
        this._heroService.getHeroesCount().then(count => this.heroCount = count);
    }
}