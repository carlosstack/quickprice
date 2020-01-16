import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EbayService {

  constructor(private http: HttpClient) {

  }

  getProductsByKeyword(keyword) {
    return this.http.get("https://www.ebay.com/marketplace/marketplacecatalog/v1/services&SERVICE-VERSION=1.3.0&SECURITY-APPNAME=CarlosEd-WhatsPir-PRD-7a5837354-59290422&GLOBAL-ID=EBAY-MOTOR&GLOBAL-ID=EBAY-MOTOR&productSearch.keywords="+keyword+"&productSearch.dataset=DisplayableSearchResults");
  }

}