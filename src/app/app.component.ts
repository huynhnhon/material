import { Component } from '@angular/core';
import { ProductsComponent } from './component/home/products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: boolean = true;
  // this.show = ProductsComponent.showSpinner();
}
