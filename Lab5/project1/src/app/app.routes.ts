import { Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'productList/:id',
        component: ProductListComponent,
        title: 'Product List',
    }

];
