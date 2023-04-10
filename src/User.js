import React, { useState } from "react";
import { forEach, find } from "lodash";
import UserProfile from "./UserProfile";

export default function User() {
  const [userList, setuserList] = useState([
    {
      id: 1,
      name: "John",
      status: "Active",
    },
    {
      id: 2,
      name: "Emily",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael",
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah",
      status: "Inactive",
    },
    {
      id: 5,
      name: "David",
      status: "Active",
    },
  ]);

  const changeStatus = (id) => {
    const user = find(userList, (u) => u.id === id);
    user.status = user.status === "Active" ? "Inactive" : "Active";
    setuserList([...userList]);
  };

  return (
    <div>
      <h1>Hello Users</h1>
      {userList.map((u) => (
        <div>
          {/* <h1>{u.name}</h1> */}
          <UserProfile
            key={u.id}
            id={u.id}
            name={u.name}
            status={u.status}
            changeStatus={() => changeStatus(u.id)}
          />
        </div>
      ))}
      <h1>Active Users</h1>
      {userList
        .filter((u) => u.status === "Active")
        .map((u) => (
          <h5>{u.name}</h5>
        ))}
    </div>
  );
}
