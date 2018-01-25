import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductService } from '../../../../core/product.service';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    create_at: Date.now()
  }

  constructor(private productService: ProductService, public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSubmit() {    
    if (this.product.name !== '') {
      this.productService.addProduct(this.product);
      this.dialogRef.close();
      this.product.name = '';
      this.product.price = 0
    }
      // this.product.unit = '',
      // this.product.weight = '',
      // this.product.size = '',
      // this.product.category = '',
      // this.product.description = ''
  }
}
