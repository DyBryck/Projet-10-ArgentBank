import React, { useState } from "react";
import EditName from "../edit-name/EditName";

const UserHeader = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="user-header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button className="edit-button" onClick={toggleCollapse}>
        Edit Name
      </button>
      <div className="user-editor-wrapper">
        <div
          className={`user-editor-content ${
            isOpen ? "user-editor-content-open" : ""
          }`}
        >
          <EditName cancel={toggleCollapse} />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
