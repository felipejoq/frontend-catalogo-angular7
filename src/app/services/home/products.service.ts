import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsI, ProductAddI } from 'src/app/models/products';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProductos(from?:number, limit?:number):Observable<ProductsI> {
    if(!from) from = 0;
    if(!limit) limit = 6;
    return this.http.get<ProductsI>(`${this.URL_API}/api/product?from=${from}&limit=${limit}`).pipe(tap((res: ProductsI) => {
        if (res) {
          
        }
      }));
  }

  postProduct(product: FormData):Observable<ProductAddI> {

    let httpHeaders = new HttpHeaders({
      "token" : localStorage.getItem('TOKEN')
    })
    
    return this.http.post<ProductAddI>(`${this.URL_API}/api/product`, product,
    { headers: httpHeaders })
    .pipe(tap((res: ProductAddI) => {
      if(res){
        
      }
    }));
  }

}

