import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css';

interface GridPhotosProps {
  images: Array<{ id: number, image: string }>;
}
const Slider = ({images}:GridPhotosProps) => {
  return (
    <Carousel plugins={['arrows']}>
      {images?.map(img => 
        <img key={img.id} src={img.image} alt="" style={{maxWidth:'700px'}} />
      )}
    </Carousel>
  )
}

export default Slider;
