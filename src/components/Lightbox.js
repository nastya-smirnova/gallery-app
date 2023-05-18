import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import { v4 as uuidv4 } from "uuid";

function Lightbox({ items }) {
  const [toggler, setToggler] = useState(false);
  const [key, setKey] = useState(uuidv4());

  useEffect(() => {
    setKey(uuidv4());
  }, [items]);

  // We had to add another state to completely rerender FsLightbox component as it doesn't support updates on image links changes
  // https://fslightbox.com/react/documentation/updating-props

  return (
    <div className="addImageContainer">
      <button className="viewAllImages" onClick={() => setToggler(!toggler)}>
        View All Images
      </button>
      <FsLightbox
        key={key}
        toggler={toggler}
        sources={items.map((item) => {
          return item.src;
        })}
      />
    </div>
  );
}

export default Lightbox;
