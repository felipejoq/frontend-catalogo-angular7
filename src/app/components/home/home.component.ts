import { ProductsI } from './../../models/products';
import { ProductsService } from './../../services/home/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProducts : ProductsI;
  from:number = 0;
  limit:number = 6;
  total:number = 0;
  hasMore:boolean = false;
  noMore:boolean = true;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts(this.from, this.limit);
  }

  getProducts(from?:number, limit?:number){
    return this.productService.getProductos(from, limit).subscribe(
      res => {
        this.total = res.count;
        this.listaProducts = res;
      },
      error => { console.log("Error"); }
    )
  }

  nextPage(){
    this.from += this.limit;
    this.limit += this.from;
    if(this.total < this.limit) this.hasMore = true;
    if(this.from > 0) this.noMore = false;
    this.getProducts(this.from, this.limit);
  }

  afterPage(){
    this.from -= this.limit - 6;
    this.limit -= 6;

    if(this.from <= 0) {
      this.from = 0;
      this.noMore = true;
    }
    if(this.limit >= this.total) this.limit = this.total;
    if(this.total > this.limit) this.hasMore = false;
    
    this.getProducts(this.from, this.limit);
  }



}
