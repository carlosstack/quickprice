import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeliInterface } from 'src/app/models/meli';

@Injectable({
  providedIn: 'root'
})
export class MeliService {

  constructor(private http: HttpClient) { 

  }
  getProductsByKeyword(keyword) {
    return this.http.get<MeliInterface>('https://api.mercadolibre.com/sites/MLA/search?q='+keyword+'&limit=20');
  }
}

