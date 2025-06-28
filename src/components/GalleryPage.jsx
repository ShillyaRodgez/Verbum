import React from 'react';
import '../styles/GalleryPage.css';

// Mock data for the gallery
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/${i + 1}/400/300`,
  alt: `Imagem da galeria ${i + 1}`,
  caption: `Evento ${i + 1}`,
}));

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Nossa Galeria</h2>
      <div className="gallery-grid">
        {galleryImages.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-caption">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;