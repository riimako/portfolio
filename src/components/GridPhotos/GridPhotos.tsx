import React from 'react';

interface GridPhotosProps {
  images: Array<{ id: number, image: string }>;
}
const GridPhotos = ({images}:GridPhotosProps) => {
  return (
    <div className="photosWraper">
      {images?.map(img => 
        <img key={img.id} src={img.image} alt="" className="image" />
      )}
    </div>
  )
}

export default GridPhotos;
