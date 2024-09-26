import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PaginaComponent,
    CarouselComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

  ]
})
export class HomeModule { }
