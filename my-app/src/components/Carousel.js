// Carousel.js

import React, { useState } from 'react';
import './Carousel.css';
import img1 from './imagen1.jpg'
import img2 from './imagen2.jpg'
import img3 from './evi1.png'

const images = [
  img1,
  img2,
  img3
  // Agrega más imágenes según sea necesario
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    console.log(currentIndex)

  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    console.log(currentIndex)
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevSlide}>Anterior</button>
      <div className="carousel">
          {/*   {currentIndex === 0 ? <img src={img1}/> : <img src={img2}/>}  */}
            <img id='imagen' src={images[currentIndex]}/>
      </div>
      <button onClick={goToNextSlide}>Siguiente</button>
    </div>
  );
};

export default Carousel;
