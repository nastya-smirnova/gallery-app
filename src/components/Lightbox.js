import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import GalleryItem from "./GalleryItem";
import Gallery from "./Gallery";

function App() {
  // To open the lightbox change the value of the "toggler" prop.
  const [item, setToggler] = useState(false);

  return (
    <div>
      <button className="lightbox" onClick={() => setToggler(!item)}>
        View All Images
      </button>
      <FsLightbox
        toggler={item}
        sources={[
          "https://images.unsplash.com/photo-1679941071803-f3a0350c002f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          "https://images.unsplash.com/photo-1530104091755-015d31dfa0b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmhkYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
          "https://youtu.be/G7KNmW9a75Y",
          "https://images.unsplash.com/photo-1594058573823-d8edf1ad3380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
        ]}
      />
    </div>
  );
}
export default App;
