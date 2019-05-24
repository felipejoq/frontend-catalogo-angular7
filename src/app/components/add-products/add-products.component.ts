import { Router } from '@angular/router';
import { ProductsService } from './../../services/home/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  selectedFile: File = null;
  fd = new FormData();

  constructor(private productService:ProductsService, private router: Router) { }

  ngOnInit() {
  }

  createProduct(form){

    this.fd.append('price', form.value.price);
    this.fd.append('name', form.value.name);
    this.fd.append('discount', form.value.discount);
    this.fd.append('description', form.value.description);
    this.fd.append('quanty', form.value.quanty);

    this.productService.postProduct(this.fd).subscribe(
      data => {
        this.router.navigateByUrl('/catalogo');
      },
      error => console.log(error)
    );
  }

  handleFileInput(files) {
    this.selectedFile = files[0];
    this.fd.append('img', this.selectedFile, this.selectedFile.name);
  }

}
