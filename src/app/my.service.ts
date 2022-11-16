import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  getPunctuation(): string {
    return "!!!"
  }

  getPokemons(): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=5");
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}