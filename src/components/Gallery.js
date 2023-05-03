import React, { useState } from "react";
import GalleryItem from "./GalleryItem";

export const Gallery = ({}) => {
  const [items, setItems] = useState([
    { src: "./images/one.jpg", title: "one", id: 1 },
    { src: "./images/two.jpg", title: "two", id: 2 },
    { src: "./images/three.jpg", title: "three", id: 3 },
    { src: "./images/four.jpg", title: "four", id: 4 },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="images">
      {items.map((item, index) => (
        <GalleryItem item={item} key={index} onDelete={removeItem} />
      ))}
    </div>
  );
};

export default Gallery;
