import { Component, OnInit } from '@angular/core';
import { MeliInterface } from '../models/meli';
import { BestBuyInterface } from '../models/bestbuy';
import { MeliService } from '../services/MeLi/meli.service';
import { BestbuyService } from '../services/BestBuy/bestbuy.service';
import { EbayService } from '../services/ebay/ebay.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  private products;
  private meliProducts: MeliInterface;
  private bestbuyProducts: BestBuyInterface;
  private ebayProducts;
  private keyword: string = '';
  private prices: number[] = [];
  private maxPrice: number;
  private minPrice: number;
  private trendingTopicsProducts;

  constructor(private meli: MeliService, private bbuy: BestbuyService, private ebay:EbayService, private router: Router, private route:ActivatedRoute) {
  }
  
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.bestbuyProducts = null
      this.keyword = params["keyword"]
      this.getBestBuyProducts();
    }
  );
}

  getBestBuyProducts() {
    this.bbuy.getProductsByKeyword(this.keyword.toString()).subscribe(
      (data) => {
        console.log('data:',data)
        this.bestbuyProducts = data;
        this.products=this.bestbuyProducts.products;
      
        this.getNewProductMaxPrice(this.bestbuyProducts.products);
      },
      (err) => { console.error(err) }
    )
  }



  getMeliProducts() {
    this.meli.getProductsByKeyword(this.keyword).subscribe(products => {
      this.meliProducts = products;
      this.getNewProductMaxPrice(this.meliProducts);
    })
  }

  getEbayProducts() {
    
        console.log(this.ebay.getProductsByKeyword('Samsung').subscribe((data)=>{return data}))
   
  }

  getNewProductMaxPrice(products) {
    for (let product of products) {

      this.prices.push(product.salePrice);

    }

    this.maxPrice = Math.max(...this.prices);

    for (let index = 0; index < this.prices.length; index++) {
      if (this.prices[index] < (this.maxPrice * 0.3)) {
        this.prices[index] = this.maxPrice;
      }

    }

    this.minPrice = Math.min(...this.prices);
    this.prices = [];
  }

}
