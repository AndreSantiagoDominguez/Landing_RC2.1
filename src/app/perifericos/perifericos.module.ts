import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPComponent } from './pagina-p/pagina-p.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    PaginaPComponent,
  
  
  
  ],
  imports: [
    CommonModule,
    SharedModule
    
    ],
    exports: [
    
    ]
})

export class PerifericosModule { }
