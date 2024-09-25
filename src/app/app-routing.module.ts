import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './home/pagina/pagina.component';
import { PaginaPComponent } from './perifericos/pagina-p/pagina-p.component';

const routes: Routes = [ 
  { path: '',component: PaginaComponent },
  { path: 'P',component: PaginaPComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
