import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'portada', component: PortadaComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'shop', component: ShopComponent},
    { path: '', redirectTo: 'portada', pathMatch: 'full' }
];