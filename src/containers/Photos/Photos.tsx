import React from 'react';
import { useHistory } from 'react-router-dom';
import './Photos.css';

const Photos = () => {
  const history = useHistory();
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

  return (
    <>
    <div className="link" onClick={() => (history.push(''))}>HOME</div>
    <div className="photosContainer">
      <div className="photosWraper">
          {images?.map(img => 
            <img key={img.id} src={img.image} alt="" className="image" />
          )}
      </div>
    </div>
    </>
  )
}

export default Photos;