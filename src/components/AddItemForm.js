import React, { useState } from "react";

export const AddItemForm = ({ addImage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addImage(value);

    setValue("");
  };

  return (
    <div className="addItemForm">
      <form onSubmit={handleSubmit} action="/action_page.php" className="form">
        <label>
          <input
            className="input"
            type="url"
            placeholder="Link 📸"
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
