import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'
import { User } from '../models/User';

@Injectable()
export class ProductService {

  user: User;

  constructor(public auth: AuthService) { 
    this.auth.user.subscribe(user => this.user = user)
  }

  log() {
    console.log(this.user.uid)
  }

}
