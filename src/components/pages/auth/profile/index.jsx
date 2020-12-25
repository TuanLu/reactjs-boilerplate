import React, { memo, useContext } from "react";
import UserContext from "src/contexts/user";

const Profile = () => {
  const { getUser } = useContext(UserContext);
  const user = getUser();
  return (
    <div className="cp-profile">
      <h1>Welcome: {user?.display_name}</h1>
      <p>
        <b>{user?.points}</b>
      </p>
      <h1>Profile Page</h1>
    </div>
  );
};

export default memo(Profile);
