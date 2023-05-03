import React from "react";

const GalleryItem = ({ item, onDelete }) => {
  return (
    <div>
      <img src={item.src} title={item.title} width={200} height={200} />
      <div>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default GalleryItem;
