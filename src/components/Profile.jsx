import React, { useState } from "react";

const Profile = () => {

    const [profile, setProfile] = useState({
        name: '',
        age: ''
    });
  return <div>
    <h1>User Profile</h1>
    <div></div>
  </div>;
};

export default Profile;
