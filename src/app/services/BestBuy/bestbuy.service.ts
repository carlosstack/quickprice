import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AjaxResponse } from 'src/app/models/ajaxResponse';
import { Observable } from 'rxjs';
import { BestBuyInterface } from 'src/app/models/bestbuy';

@Injectable({
  providedIn: 'root'
})
export class BestbuyService {

  constructor(private http: HttpClient) {

  }
  getTrendingTopic() {
    return this.http.get('https://api.bestbuy.com/beta/products/trendingViewed(categoryId=abcat0400000)?apiKey=EpYj6rownYJPw29Q6er4yDT5')
  }
  getProductsByKeyword(keyword) {
    console.log(keyword)
    return this.http.get<BestBuyInterface>('https://api.bestbuy.com/v1/products(name=' + keyword + '*)?format=json&show=name,salePrice,customerReviewAverage,customerReviewCount,thumbnailImage,url,shortDescription,features,image&apiKey=EpYj6rownYJPw29Q6er4yDT5');
  }

}
