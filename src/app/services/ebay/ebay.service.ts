import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EbayService {

  constructor(private http: HttpClient) {
   
  }

  getProductsByKeyword(keyword) {
    return this.http.get('https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=CarlosEd-WhatsPir-PRD-7a5837354-59290422&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=iPhone&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0');
  
   
  }

}