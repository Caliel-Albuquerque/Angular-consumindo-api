import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../types/character.type';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private endpointUrl = 'https://rickandmortyapi.com/api/character/'

  constructor(private http: HttpClient) { }

  getData(): Observable<Character> {
    return this.http.get<Character>(this.endpointUrl)
  }
}
