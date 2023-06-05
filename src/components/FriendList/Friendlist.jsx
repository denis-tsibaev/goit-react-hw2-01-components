import s from "./FriendList.module.css";

import FriendListItem from "../FriendListItem";

const Friendlist = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <li className={s.item} key={id}>
        <FriendListItem name={name} isOnline={isOnline} avatar={avatar} />
      </li>
    ))}
  </ul>
);

export default Friendlist;
