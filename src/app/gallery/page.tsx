export default function Gallery() {
  const images = [
    { id: 1, src: "/images/disney.jpg", alt: "disney", description: "a magical day at disneyland" },
    { id: 2, src: "/images/kj.jpg", alt: "kj", description: "meeting illinois alum and nba player kasparas jakucionis" },
    { id: 3, src: "/images/topgolf.jpg", alt: "topgolf", description: "swinging away at topgolf" },
    { id: 4, src: "/images/gt.jpg", alt: "georgia tech", description: "exploring georgia tech campus" },
    { id: 5, src: "/images/duck.jpg", alt: "campus duck", description: "late night duck sighting at uiuc" },
    { id: 6, src: "/images/brucker.jpg", alt: "first day", description: "first day at my first internship" },
  ];

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
            <div key={image.id} className="gallery-item">
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
    </div>
  );
}
