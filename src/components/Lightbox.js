import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function Lightbox({ items }) {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="addImageContainer">
      <button className="submit" onClick={() => setToggler(!toggler)}>
        View All Images
      </button>
      <FsLightbox
        toggler={toggler}
        sources={items.map((item) => {
          return item.src;
        })}
      />
    </div>
  );
}

export default Lightbox;
