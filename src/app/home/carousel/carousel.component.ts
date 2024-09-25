import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currentSlide: number = 0;
  slides!: NodeListOf<Element>;

  ngOnInit() {
    // Seleccionamos todas las diapositivas con la clase 'slide'
    this.slides = document.querySelectorAll('.slide');
    this.startCarousel(); // Inicia el carrusel
  }

  startCarousel() {
    // Ejecuta el cambio de diapositiva cada 3 segundos
    setInterval(() => {
      this.moveToNextSlide();
    }, 3000);
  }

  moveToNextSlide() {
    // Incrementa la diapositiva actual y se asegura de que sea cíclico
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    const slidesContainer = document.querySelector('.slides') as HTMLElement;
    slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }
}
