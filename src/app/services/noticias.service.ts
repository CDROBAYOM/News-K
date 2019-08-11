import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  constructor(private http: HttpClient) { }
  
  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=984e255723ed49a6a400ca94068aa962');
  }

}

