import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './home/pagina/pagina.component';
import { PaginaPComponent } from './perifericos/pagina-p/pagina-p.component';
import { PaginaCComponent } from './computadoras/pagina-c/pagina-c.component';

const routes: Routes = [ 
  { path: '',component:  PaginaComponent },
  { path: 'P',component: PaginaPComponent },
  { path: 'C',component: PaginaCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
