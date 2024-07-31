import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editName } from "../../redux/userSlice";

const EditName = ({ cancel }) => {
  const [userName, setUserName] = useState(
    useSelector((state) => state.user.userName)
  );
  const [firstName, setFirstName] = useState(
    useSelector((state) => state.user.firstName)
  );
  const [lastName, setLastName] = useState(
    useSelector((state) => state.user.lastName)
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { userName, firstName, lastName };
    /* fetch(http://localhost:3001/api/v1/user/profile
) METHOD PUT */
    dispatch(editName(body));
    cancel();
  };
  return (
    <form className="user-edit-form" onSubmit={handleSubmit}>
      <label htmlFor="username">User name:</label>
      <input
        name="username"
        id="username"
        type="text"
        autoComplete="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <label htmlFor="firstname">First name:</label>
      <input
        autoComplete="given-name"
        name="firstname"
        id="firstname"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <label autoComplete="family-name" htmlFor="lastname">
        Last name:
      </label>
      <input
        name="lastname"
        id="lastname"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
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
