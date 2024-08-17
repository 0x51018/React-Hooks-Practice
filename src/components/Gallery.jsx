import React, { useState } from 'react';
import './Gallery.css';

const Card = ({ content }) => (
  <div className="card">
    {content}
  </div>
);

const Gallery = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    console.log('prev');
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  const handleNext = () => {
    console.log('next');
    setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="gallery-container">
      <button onClick={handlePrev} className="nav-button">Prev</button>
      <div className="cards-wrapper">
        <div className="cards" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <Card key={index} content={card} />
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="nav-button">Next</button>
    </div>
  );
};

export default Gallery;
