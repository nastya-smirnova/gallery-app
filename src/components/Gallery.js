import React, { useState, Component } from "react";
import GalleryItem from "./GalleryItem";

export const Gallery = ({}) => {
  const [items, setItems] = useState([
    { src: "./images/one.jpg", title: "one" },
    { src: "./images/two.jpg", title: "two" },
    { src: "./images/three.jpg", title: "three" },
    { src: "./images/four.jpg", title: "four" },
  ]);

  return (
    <div className="images">
      {items.map((item, index) => (
        <GalleryItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Gallery;
