import React, { useState } from "react";

export const AddItemForm = ({ addImage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addImage(value);

    setValue("");
  };

  return (
    <div className="actionBarContainer">
      <form onSubmit={handleSubmit} className="formContainer">
        <label>
          <input
            className="input"
            type="url"
            placeholder="Image Link 📸"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            pattern="https?://.+"
            title="Include http:// or https://"
          />
        </label>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
