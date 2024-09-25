import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomSectionComponent } from '../custom-section/custom-section.component'; // Asegúrate que esta ruta es correcta
import { CardComponent } from '../card/card.component';
import { CardRComponent } from '../card-r/card-r.component';

@NgModule({
  declarations: [
    PaginaComponent,
    CarouselComponent,
    CustomSectionComponent,
    CardComponent,
    CardRComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSectionComponent,
    CardComponent,
    CardRComponent
  ]
})
export class HomeModule { }
