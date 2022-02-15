import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../shared/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit,OnDestroy {

  constructor(private productService: ProductService) { }

  products = [];
  pSub: Subscription;
  rSub: Subscription;
  productFind: string;

  ngOnInit() {
    this.pSub = this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
  delete(id) {
    this.rSub = this.productService.remove(id).subscribe(() => {
      this.products = this.products.filter(prod => prod.id !== id);
    });
  }


}
