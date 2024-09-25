import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    PaginaComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
