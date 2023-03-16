import css from './Profile.module.css';

export default function Profile({ username, avatar, location, stats, tag }) {
  return (
    <div className={css.profile} key={username}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.profileStats}>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.profileStats}>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.profileStats}>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
