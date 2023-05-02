import Gallery from "./Gallery";
import React, { useState, Component } from "react";

export const GalleryItem = ({ item }) => {
  return <img src={item.src} title={item?.title} width={200} height={200} />;
};

export default GalleryItem;
