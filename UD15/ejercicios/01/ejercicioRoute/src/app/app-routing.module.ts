import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildAComponent } from './home/child-a/child-a.component';
import { ChildBComponent } from './home/child-b/child-b.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children: [{path: 'child-a', component: ChildAComponent}, {path: 'child-b', component: ChildBComponent}] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
