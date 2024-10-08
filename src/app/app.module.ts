import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { PerifericosModule } from './perifericos/perifericos.module';
import { ComputadorasModule } from './computadoras/computadoras.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PerifericosModule,
    ComputadorasModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
