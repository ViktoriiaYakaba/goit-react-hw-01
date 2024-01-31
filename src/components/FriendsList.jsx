import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => {
  const friendList = {
    display: "flex",
    gap: 30,
    marginTop: 100
  }
  return (
    <ul style={friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;