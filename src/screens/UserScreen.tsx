import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../resources/Users.ts";

function UserScreen() {

    const { id } = useParams();
    const user = users.find(user => user.id.toString() === id);

    if(!user) {
      return (
        <div className="container">
          <h1>User not found</h1>
        </div>
      );
    }

    const { name } = user;

    return (
      <div className="container">
        <h1>User {name}</h1>
      </div>
    );
  }
  export default UserScreen;