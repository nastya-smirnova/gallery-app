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
      src: "https://images.unsplash.com/photo-1682465135511-2db0f206db6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8TXI0OUV2aDVTa3N8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
      title: "one",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1683489105218-6e1657ca8cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TXI0OUV2aDVTa3N8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
      title: "two",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1601815560619-c5aeb2cb9297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TXI0OUV2aDVTa3N8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60",
      title: "three",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1679556026240-6ea91e686cfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "four",
      id: uuidv4(),
    },
    {
      src: "https://images.unsplash.com/photo-1683016707500-0ab27d0ebf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fE1yNDlFdmg1U2tzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
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

  return (
    <div>
      <div className="addItemForm">
        <AddItemForm addImage={addImage} />
        <div>
          <Lightbox items={items} />
        </div>
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
