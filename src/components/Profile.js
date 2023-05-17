import React from "react";

export default function Profile({
  name = "Petra Marica",
  tag = "@pmarica",
  location = "Salvador, Brasil",
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) {
  const { followers = 1, views = 2, likes = 3 } = stats;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}
