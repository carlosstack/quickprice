import { Component, OnInit } from '@angular/core';
import { MeliService } from "../services/MeLi/meli.service";
import { BestbuyService } from '../services/BestBuy/bestbuy.service';
import { MeliInterface } from '../models/meli';
import { BestBuyInterface } from '../models/bestbuy';
import { EbayService } from "../services/ebay/ebay.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private products;
  private meliProducts: MeliInterface;
  private bestbuyProducts: BestBuyInterface;
  private ebayProducts;
  private keyword: string = '';
  private prices: number[] = [];
  private maxPrice: number;
  private minPrice: number;
  private trendingTopicsProducts;

  constructor(private meli: MeliService, private bbuy: BestbuyService, private ebay:EbayService, private router: Router) {
    this.bbuy.getTrendingTopic().subscribe((data)=>{
      this.trendingTopicsProducts = data;
    });
  }

  ngOnInit() {
    
  }

 
}
