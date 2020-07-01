import React from "react";
import UserItem from "./UserItem";
import classes from "./UsersList.module.css";

const renderUsersList = (items) => {
  return items.map((user) => (
    <UserItem
      key={user.id}
      id={user.id}
      image={user.image}
      name={user.name}
      placeCount={user.places}
    />
  ));
};

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }
  return <ul className={classes.UsersList}>{renderUsersList(props.items)}</ul>;
};

export default UsersList;
