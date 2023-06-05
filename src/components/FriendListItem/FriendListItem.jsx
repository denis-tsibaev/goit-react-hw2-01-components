import s from "./FriendListItem.module.css";
import cn from "classnames";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </>
);

export default FriendListItem;
