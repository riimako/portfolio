import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Photos.css';

import Switch from '../../components/Switch/Switch';
import GridPhotos from '../../components/GridPhotos/GridPhotos';
import Slider from '../../components/Slider/Slider';

const Photos = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
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

  const handleClick = (value:boolean) => {
    setChecked(value);
  }

  return (
    <>
    <div style={{display:'flex', alignItems:'center'}}>
      <div className="link" onClick={() => (history.push(''))}>HOME</div>
      <Switch onClick={handleClick} />
    </div>
    
    <div className="photosContainer">
      {checked 
        ? <GridPhotos images={images} />
        : <Slider images={images} />
      }
     
    </div>
    </>
  )
}

export default Photos;