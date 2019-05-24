import { AddProductsComponent } from './components/add-products/add-products.component';
import { AuthGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'add-product', canActivate: [AuthGuard], component: AddProductsComponent},
    {path: 'catalogo', component: HomeComponent},
    {path: '', pathMatch: 'full', redirectTo: 'catalogo'},
    {path: '**', pathMatch: 'full', redirectTo: 'catalogo'}
];