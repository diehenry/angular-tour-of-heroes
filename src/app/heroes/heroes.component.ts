import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // 載入順序 constructor -> onOnChange -> ngOnInit -> ...

  // DI
  constructor(
    private heroService: HeroService,
  ) {}

  // 在此調用
  ngOnInit(): void {
    this.getHeroes();
  }

  // Observable (可觀察的)
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heores) => (this.heroes = heores));
  }
}
