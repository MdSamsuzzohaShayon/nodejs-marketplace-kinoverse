import React from 'react';
import { useSelector } from 'react-redux';

const Profile = (props) => {
  const subscriber = useSelector((state) => state.subscriber.value);
  return (<div>
    Profile
    <br />
    <p>{subscriber.name}</p>
    <p>{subscriber.email}</p>
  </div>);
};

export default Profile;
