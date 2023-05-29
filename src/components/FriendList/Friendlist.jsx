import FriendListItem from "../FriendListItem";

const Friendlist = ({ friends }) => (
  <ul className="friendList">
    {friends.map(({ id, name, avatar, isOnline }) => (
      <li key={id}>
        <FriendListItem name={name} isonline={isOnline} avatar={avatar} />
      </li>
    ))}
  </ul>
);

export default Friendlist;
