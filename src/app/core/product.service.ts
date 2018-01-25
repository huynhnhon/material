import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service'
import { User } from '../models/User';
import { Product } from '../models/Product';

@Injectable()
export class ProductService {

  productCollection: AngularFirestoreCollection<Product>;
  product: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;

  user: User;
  idUser: any;

  constructor(public auth: AuthService, public afs: AngularFirestore) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.productCollection = this.afs.collection('connection').doc(`${user.uid}`).collection('products');
        this.product = this.productCollection.snapshotChanges().map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as Product;
            data.id = a.payload.doc.id;
            return data;
          });
        });
      }else {
        return Observable.of(null)
      }
    });
  }


  getProducts() {
    console.log();
    return this.product;
  }

  addProduct(product: Product) {
    this.productCollection.add(product);
  }

  deleteProduct(product: Product) {
    let id: string = product.id.toString();
    this.productDoc = this.productCollection.doc(id);
    this.productDoc.delete();
  }

  update(product: Product) {
    let id: string = product.id.toString();
    this.productDoc = this.productCollection.doc(id);
    this.productDoc.update(product);
  }

}
