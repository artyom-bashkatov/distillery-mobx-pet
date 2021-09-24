import React from "react";

import { userStore } from "Store/RandomUser";

import "./style.css";

const User = () => {
  const { name, picture, id, location, registered } = userStore.user;
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          {" "}
          <img
            className="avatar"
            src={picture.large}
            height="100"
            width="100"
          />
          <span className="name mt-3">
            {name.first} {name.last}
          </span>{" "}
          <span className="userId">ID: {id.value ? id.value : "none"}</span>
          <div className="text">
            <span>City: {location.city}</span>
          </div>
          <div className=" px-2 rounded date ">
            {" "}
            <span className="join">
              Joined {new Date(registered.date).toLocaleDateString()}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
