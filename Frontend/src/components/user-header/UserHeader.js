import React from "react";

const UserHeader = ({ userName }) => {
  return (
    <div className="user-header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserHeader;
