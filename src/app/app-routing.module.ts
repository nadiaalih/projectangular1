import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : '' , component : HomeComponent},
  {path : 'product' , component : ProductComponent},
  {path : 'contact' ,component : ContactComponent },
  {path : 'blog' , component : BlogComponent},
  {path : 'about' , component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
