import React from 'react';
import './ModalPhotos.css';
import Slider from '../Slider/Slider';
import { images } from '../../images';

interface ModalPhotoProps {
  onClick: Function;
}

const ModalPhotos = ({onClick}:ModalPhotoProps) => {
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
