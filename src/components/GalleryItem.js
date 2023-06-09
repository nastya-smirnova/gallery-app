import React from "react";

const GalleryItem = ({ item, onDelete }) => {
  return (
    <div className="imageCaruselContainer">
      <img src={item.src} title={item.title} width={200} height={200} />
      <button className="delete" onClick={() => onDelete(item.id)}>
        ✕
      </button>
    </div>
  );
};

export default GalleryItem;
