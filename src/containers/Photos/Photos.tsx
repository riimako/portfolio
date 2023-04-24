import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Photos.css';
import { images } from '../../images';

import Switch from '../../components/Switch/Switch';
import GridPhotos from '../../components/GridPhotos/GridPhotos';

const Photos = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleClick = (value:boolean) => {
    setChecked(value);
  }

  return (
    <>
    <div style={{display:'flex', alignItems:'center'}}>
      <div className="link" onClick={() => (navigate(''))}>HOME</div>
      <Switch onClick={handleClick} />
    </div>
    
    <div className="photosContainer">
    <GridPhotos images={images} />
      
     
    </div>
    </>
  )
}

export default Photos;