import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginaCComponent } from './pagina-c/pagina-c.component';



@NgModule({
  declarations: [
    PaginaCComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComputadorasModule { }
