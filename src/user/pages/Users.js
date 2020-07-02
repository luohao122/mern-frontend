import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: `u1`,
      name: "Jake Luong",
      image: "https://m.media-amazon.com/images/I/51QRRRLNgSL._AC_SL260_.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
