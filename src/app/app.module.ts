import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MenuSidenavComponent } from './component/home/menu-sidenav/menu-sidenav.component';
import { ProductsComponent } from './component/home/products/products.component';
import { AddComponent } from './component/home/products/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuSidenavComponent,
    ProductsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    // AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent]
})
export class AppModule { }
