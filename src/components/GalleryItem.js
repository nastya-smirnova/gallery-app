import React from "react";

const GalleryItem = ({ item, onDelete }) => {
  return (
    <div className="images">
      <img src={item.src} title={item.title} width={200} height={200} />
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

export default GalleryItem;
