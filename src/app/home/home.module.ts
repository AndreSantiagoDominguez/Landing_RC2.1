import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomSectionComponent } from '../custom-section/custom-section.component'; // Asegúrate que esta ruta es correcta

@NgModule({
  declarations: [
    PaginaComponent,
    CarouselComponent,
    CustomSectionComponent // Declarado aquí
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSectionComponent // Exporta para que otros módulos puedan usarlo
  ]
})
export class HomeModule { }
