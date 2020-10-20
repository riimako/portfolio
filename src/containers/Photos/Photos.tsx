import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Photos.css';
import { images } from '../../images';

import Switch from '../../components/Switch/Switch';
import GridPhotos from '../../components/GridPhotos/GridPhotos';
import Slider from '../../components/Slider/Slider';

const Photos = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);

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