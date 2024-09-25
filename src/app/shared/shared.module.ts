// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSectionComponent } from './custom-section/custom-section.component'; // Ajusta las rutas
import { CardRComponent } from './card-r/card-r.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CustomSectionComponent,
    CardRComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSectionComponent,
    CardRComponent,
    CardComponent,
  ]
})
export class SharedModule { }
