"use client";

import { useState, useEffect } from "react";

const images = [
  { id: 1, src: "/images/disney.jpg", alt: "disney", description: "a magical day at disneyland" },
  { id: 2, src: "/images/kj.jpg", alt: "kj", description: "meeting illinois alum and nba player kasparas jakucionis" },
  { id: 3, src: "/images/topgolf.jpg", alt: "topgolf", description: "swinging away at topgolf" },
  { id: 4, src: "/images/gt.jpg", alt: "georgia tech", description: "exploring georgia tech campus" },
  { id: 5, src: "/images/duck.jpg", alt: "campus duck", description: "late night duck sighting at uiuc" },
  { id: 6, src: "/images/brucker.jpg", alt: "first day", description: "first day at my first internship" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">gallery</h1>
          <p className="page-description">
            a visual collection of moments, places, and things that inspire me.
          </p>
        </header>

        <div className="gallery-grid">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
              style={{ cursor: "pointer" }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.75rem" }}
              />
              <div className="gallery-overlay">
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="close"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <p className="modal-description">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
