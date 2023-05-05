import React, { useState } from "react";

export const AddItemForm = ({ addImage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addImage(value);

    setValue("");
  };
  // const AddItem = (item) => {
  //   setItems([
  //     ...items,
  //     {
  //       id: item.id,
  //       title: item.title,
  //     },
  //   ]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add new image:
          <input
            type="text"
            placeholder="Add new?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
// };
