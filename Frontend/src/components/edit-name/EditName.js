import React from "react";

const EditName = ({ cancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="user-edit-form" onSubmit={handleSubmit}>
      <label htmlFor="username">User name:</label>
      <input
        name="username"
        placeholder="Tetris72"
        id="username"
        type="text"
        autoComplete="username"
      ></input>
      <label htmlFor="firstname">First name:</label>
      <input
        autoComplete="given-name"
        name="firstname"
        placeholder="John"
        id="firstname"
        type="text"
      ></input>
      <label autoComplete="family-name" htmlFor="lastname">
        Last name:
      </label>
      <input
        name="lastname"
        id="lastname"
        placeholder="Appleseed"
        type="text"
      ></input>
      <div className="user-edit-buttons">
        <button type="submit" className="edit-button form-button">
          Save
        </button>
        <button className="edit-button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
