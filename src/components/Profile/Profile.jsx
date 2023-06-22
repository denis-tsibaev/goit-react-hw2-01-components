import style from "./profile.module.css";

function Profile({
  name = "Petra Marica",
  tag = "@pmarica",
  location = "Salvador, Brasil",
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) {
  const { followers = 1, views = 2, likes = 3 } = stats;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers: </span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span className={style.label}>Views: </span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span className={style.label}>Likes: </span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
