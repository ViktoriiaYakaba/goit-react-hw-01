import React from 'react';
import Profile from './Profile';
import userData from "./userData.json";
import FriendList from "./FriendsList";
import friends from "./friends.json";
import TransactionHistory from "./TransactionHistory.jsx";
import transactions from "./transactions.json";

const user = JSON.parse(JSON.stringify(userData));
const friend = JSON.parse(JSON.stringify(friends));
const transaction = JSON.parse(JSON.stringify(transactions));
 
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
        <FriendList friends={friend} />
        <TransactionHistory items={transactions} />
    </>
  );
};
export default App;

