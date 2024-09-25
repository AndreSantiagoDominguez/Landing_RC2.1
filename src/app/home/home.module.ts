import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomSectionComponent } from '../custom-section/custom-section.component'; // Asegúrate que esta ruta es correcta
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    PaginaComponent,
    CarouselComponent,
    CustomSectionComponent,
    CardComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSectionComponent,
    CardComponent 
  ]
})
export class HomeModule { }
