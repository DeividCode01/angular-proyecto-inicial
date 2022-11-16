import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MyService } from './my.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  pokemons = [];

  constructor(private readonly myService: MyService) {}

  ngOnInit() {
    this.requestPokemons();
  }

  requestPokemons() {
    this.myService.getPokemons().subscribe(({ results }) => {
      this.pokemons = [...this.pokemons, ...results];
      console.log(this.pokemons)
      const urls = this.pokemons.map(({ url }) => url);
      console.log(urls)
      const requests = urls.map((url) => this.myService.getPokemon(url));
      forkJoin(requests).subscribe((pokemonsInfo: []) => this.addImage(pokemonsInfo));
    });
  }

  addImage(pokemonsInfo: []) {
    this.pokemons = this.pokemons.map((pokemon, idx) => {
      const { sprites: { front_default } } = pokemonsInfo[idx];
      return { ...pokemon, image: front_default };
    });
    console.log(this.pokemons)
  }
}
