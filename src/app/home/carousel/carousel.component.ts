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
    this.slides = document.querySelectorAll('.slide');
    this.startCarousel(); // Inicia el carrusel
  }

  startCarousel() {
    setInterval(() => {
      this.moveToNextSlide();
    }, 3000);// Ejecuta el cambio de diapositiva cada 3 segundos
  }

  moveToNextSlide() {
    // Incrementa la diapositiva actual y se asegura de que sea cíclico
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    const slidesContainer = document.querySelector('.slides') as HTMLElement;
    slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }
}
