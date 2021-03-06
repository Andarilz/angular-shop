import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {FBresponse, Product} from "./interfaces";


@Injectable({
    providedIn: 'root'
})

export class ProductService {

    type = 'Phone';
    cartProduct: Product[] = [];

    constructor(public http: HttpClient) {}

    create(product) {
        return this.http.post(`${environment.URL}/products.json`, product)
                .pipe(map( (res: FBresponse) => {
                    return {
                        ...product,
                        id: res.name,
                        date: new Date(product.date)
                    };
                }
            ));
    }

    getAll() {
        return this.http.get(`${environment.URL}/products.json`)
            .pipe(map(res => {
                return Object.keys(res)
                    .map(key => ({
                        ...res[key],
                        id: key,
                        data: new Date(res[key].date)
                    }));
            }));
    }

    getById(id) {
        return this.http.get(`${environment.URL}/products/${id}.json`)
            .pipe(map((res: Product) => {
                return {
                        ...res,
                        id,
                        data: new Date(res.date)
                    };
            }));
    }

    remove(id) {
        return this.http.delete(`${environment.URL}/products/${id}.json`);
    }

    update(product: Product) {
        return this.http.patch(`${environment.URL}/products/${product.id}.json`, product);
    }

    setType(type) {
        this.type = type;
    }
    addProduct(product) {
        this.cartProduct.push(product);
    }
}








