import React, { useState } from "react";
import GalleryItem from "./GalleryItem";
import { v4 as uuidv4 } from "uuid";
import AddItem, { AddItemForm } from "./AddItemForm";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "./Lightbox";
// import ShowAgain from "./ShowAgain";

export const Gallery = ({}) => {
  const [items, setItems] = useState([
    {
      src: "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1660&q=80",
      title: "one",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1522775417749-29284fb89f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      title: "two",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1456421385613-d0666bb96b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
      title: "three",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1533979640417-546cbced58b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      title: "four",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1488654091480-0a2443430a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
      title: "four",
      id: uuidv4(),
    },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addImage = (imageSrc) => {
    setItems([
      ...items,
      {
        id: uuidv4(),
        title: "titleSample",
        src: imageSrc,
      },
    ]);
  };

  // const showAgain = (items) => {
  //   showAgain([...items, items]);
  // };

  return (
    <div>
      <div className="actionBarContainer">
        <AddItemForm addImage={addImage} />
        <Lightbox items={items} />
      </div>
      <div>
        {items.length > 0 ? (
          <AliceCarousel
            autoPlay
            autoPlayInterval="3000"
            disableButtonsControls={false}
          >
            {items.map((item, index) => (
              <div className="container">
                <GalleryItem item={item} key={index} onDelete={removeItem} />
              </div>
            ))}
          </AliceCarousel>
        ) : (
          <div className="noImgContainer">
            {/* <span className="noImages">Ops... No images left</span> */}
            {/* <ShowAgain showAgain={showAgain} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
