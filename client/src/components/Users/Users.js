import React from "react";

import "./Users.css";

const Users = ({ users }) => {
  return (
    <div className="users">
      <h3>Members</h3>
      <div className="all-users">
        {users.map(user => (
          <div className="user-box" key={`${user.name}${user.room}`}>
            <div className="online-icon"></div>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
