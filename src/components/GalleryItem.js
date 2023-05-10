import React from "react";

const GalleryItem = ({ item, onDelete }) => {
  return (
    <div>
      <img src={item.src} title={item.title} width={200} height={200} />
      <button className="delete" onClick={() => onDelete(item.id)}>
        Х
      </button>
    </div>
  );
};

export default GalleryItem;
