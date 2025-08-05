import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { JournalComponent } from './journal/journal.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  // Main Pages
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'journal',
    component: JournalComponent,
  },
  {
    path: 'journal/:slug',
    component: JournalComponent, // You might want a separate blog post component
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  // Category Pages
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:category',
    component: ShopComponent,
  },

  // E-commerce Pages
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },

  // Auth Pages
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'auth/forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

  // Legacy routes (for backward compatibility)
  {
    path: 'product',
    component: ProductComponent,
  },

  // Redirect any unknown routes to home
  {
    path: '**',
    redirectTo: '',
  },
];
