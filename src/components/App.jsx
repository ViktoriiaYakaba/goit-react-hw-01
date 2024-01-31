import React from 'react';
import Profile from './Profile';
import userData from "./userData.json";

const user = JSON.parse(JSON.stringify(userData));

console.log(user);

 const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
export default App;