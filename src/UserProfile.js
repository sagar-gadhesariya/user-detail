import React from "react";

export default function UserProfile(props) {
  const { id, name, status, changeStatus } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={status === "Active" ? true : false}
        onChange={changeStatus}
      />
      <span>{name}</span>
    </div>
  );
}
