import React from 'react';
import './ModalPhotos.css';
import Slider from '../Slider/Slider';

interface ModalPhotoProps {
  onClick: Function;
}

const ModalPhotos = ({onClick}:ModalPhotoProps) => {
  const images: Array<any> = [
    {
      id: 1,
      image: "image-default-1.jpg"
    },
    {
      id: 2,
      image: "image-default-2.jpg"
    },
    {
      id: 3,
      image: "image-default-3.jpg"
    },
    {
      id: 4,
      image: "image-default-2.jpg"
    },
    {
      id: 5,
      image: "image-default-3.jpg"
    },
    {
      id: 6,
      image: "image-default-1.jpg"
    },
    {
      id: 7,
      image: "image-default-3.jpg"
    },
    {
      id: 8,
      image: "image-default-1.jpg"
    },
    {
      id: 9,
      image: "image-default-2.jpg"
    }
  ]

  const handleModal = () => {
    onClick();
  }

  return (
    <div className="modalPhotosContainer">
      <div className="modalContent">
        <img src="/img/icon-cancel.png" alt="" className="cancel" onClick={handleModal} />
        <Slider images={images} />
      </div>
    </div>
  )
}

export default ModalPhotos;
