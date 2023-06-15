import React, { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem";
import { v4 as uuidv4 } from "uuid";
import AddItem, { AddItemForm } from "./AddItemForm";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Lightbox from "./Lightbox";

const images = [
  {
    src: "https://images.unsplash.com/photo-1553455860-2fa544e14141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    title: "one",
    id: uuidv4(),
  },
  {
    src: "https://images.unsplash.com/photo-1594587640199-90ad1cb30c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    title: "two",
    id: uuidv4(),
  },
  {
    src: "https://images.unsplash.com/photo-1605092043492-6ce2570a535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "three",
    id: uuidv4(),
  },
  {
    src: "https://images.unsplash.com/photo-1589698272390-0501a07619bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    title: "four",
    id: uuidv4(),
  },
  {
    src: "https://images.unsplash.com/photo-1569850419363-5dd0d3f3b3a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    title: "four",
    id: uuidv4(),
  },
];

export const Gallery = ({}) => {
  const [items, setItems] = useState([
    {
      src: "https://images.unsplash.com/photo-1553455860-2fa544e14141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      title: "one",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1594587640199-90ad1cb30c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "two",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1605092043492-6ce2570a535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "three",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1589698272390-0501a07619bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "four",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1569850419363-5dd0d3f3b3a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
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

  const ReloadImages = (imageSrc) => {
    setItems([...images]);
  };

  return (
    <div>
      <div className="actionBarContainer">
        <AddItemForm addImage={addImage} />
        <Lightbox items={items} />
      </div>

      {items.length > 0 ? (
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          disableButtonsControls={false}
        >
          {items.map((item, index) => (
            <div className="imageCaruselContainer">
              <GalleryItem item={item} key={index} onDelete={removeItem} />
            </div>
          ))}
        </AliceCarousel>
      ) : (
        <div className="noImgContainer">
          <span className="noImagesMessage">
            No images left 😢 <br /> Please, click the 'Reload Images' button to
            see images again.
          </span>

          <button onClick={ReloadImages} className="reloadImages">
            Reload Images
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
