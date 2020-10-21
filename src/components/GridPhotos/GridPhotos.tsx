import React, { useState } from 'react';
import ModalPhotos from '../ModalPhotos/ModalPhotos';

interface GridPhotosProps {
  images: Array<{ id: number, image: string }>;
}
const GridPhotos = ({images}:GridPhotosProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="photosWraper">
      {images?.map(img => 
        <img key={img.id} src={img.image} alt="" className="image" onClick={handleModal} />
      )}
      { showModal && <ModalPhotos onClick={handleModal} />}
    </div>
  )
}

export default GridPhotos;
