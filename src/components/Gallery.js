import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import { v4 as uuidv4 } from "uuid";
import AddItem, { AddItemForm } from "./AddItemForm";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Lightbox from "./Lightbox";
uuidv4();

export const Gallery = ({}) => {
  const [items, setItems] = useState([
    {
      src: "https://images.unsplash.com/photo-1679939652171-75015fffe7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "one",
      id: uuidv4(),
      onDragStart: "handleDragStart",
      role: "presentation",
    },
    {
      src: "https://images.unsplash.com/photo-1679941071803-f3a0350c002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "two",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1679872995990-a9811773f3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "three",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1679556026240-6ea91e686cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "four",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      title: "four",
      id: uuidv4(),
    },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addImage = (imageSrc) => {
    // if ({ imageSrc } !== { src: { imageSrc } }) {
    //   return;
    // }
    setItems([
      ...items,
      {
        id: uuidv4(),
        title: "titleSample",
        src: imageSrc,
      },
    ]);
    console.log(items);
  };

  return (
    <div>
      <div className="addItemForm">
        <AddItemForm addImage={addImage} />
        <Lightbox />
      </div>
      {/* <div className="images">
        {items.map((item, index) => (
          <GalleryItem item={item} key={index} onDelete={removeItem} />
        ))}
      </div> */}
      <div>
        {items.length >= 1 ? (
          <AliceCarousel autoPlay autoPlayInterval="3000">
            {items.map((item, index) => (
              <div className="container">
                <GalleryItem
                  item={item}
                  key={index}
                  onDelete={removeItem}
                  className="container"
                />
              </div>
            ))}
          </AliceCarousel>
        ) : (
          <h2 className="noImages">Ops...no images left</h2>
        )}
      </div>
    </div>
  );
};

export default Gallery;
