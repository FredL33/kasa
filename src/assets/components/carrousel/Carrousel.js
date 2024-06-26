import  { useState } from "react";
import "./carrousel.css";
import left from "../assets/images/left-arrow.png";
import right from "../assets/images/right-arrow.png";

// Composant pour le slideshow des images des locations

function SlideShow({ appt }) {
  // Index sur l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);
  // Etat pour la transition
  const [isFading, setIsFading] = useState(false);

  // Affichage des flèches si plus d'une image
  const showArrows = appt.length > 1;

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % appt.length);
      setIsFading(false);
    }, 200);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + appt.length) % appt.length
      );
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="slide-show-container">
      <div className="slide-show-inner">
        {showArrows && (
          <button
            onClick={handlePrev}
            className="slide-show-arrow slide-show-arrow-left"
          >
            <img src={left} alt="précédent" />
          </button>
        )}
        <img
          src={appt[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className={`slide-show-image ${isFading ? "fading" : ""}`}
        />
        {showArrows && (
          <button
            onClick={handleNext}
            className="slide-show-arrow slide-show-arrow-right"
          >
            <img src={right} alt="suivant" />
          </button>
        )}
        <div className="slide-show-index">
          {showArrows && `${currentIndex + 1} / ${appt.length}`}
        </div>
      </div>
    </div>
  );
}

export default SlideShow;