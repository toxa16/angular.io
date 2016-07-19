// #docplaster
// #docregion full, v1
import { Component }          from '@angular/core';

import { HeroListComponent }  from './hero-list.component.2';
// #enddocregion v1
import { HeroService }        from './hero.service.1';
// #enddocregion full
/*
// #docregion full
import { HeroListComponent }  from './hero-list.component';
// #docregion v1
import { HeroService }        from './hero.service';
// #enddocregion full, v1
*/
// #docregion full, v1

@Component({
  selector: 'my-heroes',
  template: `
  <h2>Heroes</h2>
  <hero-list></hero-list>
  `,
  // #enddocregion v1
  providers: [HeroService],
  // #docregion v1
  directives: [HeroListComponent]
})
export class HeroesComponent { }
