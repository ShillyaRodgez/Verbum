import React, { useState } from 'react';
import '../styles/GalleryPage.css';

// Mock data for the gallery with albums
const galleryAlbums = [
  {
    id: 1,
    name: 'Encontro 1',
    thumbnail: 'https://picsum.photos/seed/1/400/300',
    images: [
      'https://picsum.photos/seed/1/800/600',
      'https://picsum.photos/seed/101/800/600',
      'https://picsum.photos/seed/102/800/600',
      'https://picsum.photos/seed/103/800/600',
    ],
  },
  {
    id: 2,
    name: 'Encontro 2',
    thumbnail: 'https://picsum.photos/seed/2/400/300',
    images: [
      'https://picsum.photos/seed/2/800/600',
      'https://picsum.photos/seed/201/800/600',
      'https://picsum.photos/seed/202/800/600',
    ],
  },
  {
    id: 3,
    name: 'Encontro 3',
    thumbnail: 'https://picsum.photos/seed/3/400/300',
    images: [
      'https://picsum.photos/seed/3/800/600',
      'https://picsum.photos/seed/301/800/600',
      'https://picsum.photos/seed/302/800/600',
      'https://picsum.photos/seed/303/800/600',
      'https://picsum.photos/seed/304/800/600',
    ],
  },
  // Add more albums as needed
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 4,
    name: `Encontro ${i + 4}`,
    thumbnail: `https://picsum.photos/seed/${i + 4}/400/300`,
    images: [
      `https://picsum.photos/seed/${i + 4}/800/600`,
      `https://picsum.photos/seed/${(i + 4) * 10}/800/600`,
      `https://picsum.photos/seed/${(i + 4) * 20}/800/600`,
    ],
  })),
];

const GalleryModal = ({ album, onClose }) => {
  if (!album) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>{album.name}</h3>
        <div className="modal-gallery-grid">
          {album.images.map((src, index) => (
            <img key={index} src={src} alt={`${album.name} - Imagem ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const openModal = (album) => {
    setSelectedAlbum(album);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Nossa Galeria</h2>
      <div className="gallery-grid">
        {galleryAlbums.map(album => (
          <div key={album.id} className="gallery-item" onClick={() => openModal(album)}>
            <img src={album.thumbnail} alt={album.name} className="gallery-image" />
            <div className="gallery-caption">
              <p>{album.name}</p>
            </div>
          </div>
        ))}
      </div>
      <GalleryModal album={selectedAlbum} onClose={closeModal} />
    </div>
  );
};

export default GalleryPage;