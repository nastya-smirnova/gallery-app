import React, { useState } from "react";

export const AddItemForm = ({ addImage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addImage(value);

    setValue("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="addItemForm"
        action="/action_page.php"
      >
        <label>
          <input
            className="input"
            type="url"
            placeholder="Add new image 📸"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            pattern="https?://.+"
            title="Include http://"
          />
        </label>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
