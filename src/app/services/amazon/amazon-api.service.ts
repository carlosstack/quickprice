import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AmazonApiService {

  private options = {
    "headers": {
      "x-rapidapi-host": "axesso-axesso-amazon-data-service-v1.p.rapidapi.com",
      "x-rapidapi-key": "ebdb37f560msh5ec9c3bfce1564bp153d01jsn136800fec6da"
    }
  };

  constructor(private http: HttpClient) { 
    
  }

  getProductsByKeyword() {
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6');
  }
}
