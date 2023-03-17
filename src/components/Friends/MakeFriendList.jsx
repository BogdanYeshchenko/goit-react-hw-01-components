import css from './Friends.module.css';
import PropTypes from 'prop-types';

export default function MakeFriendList({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.green : css.red}`}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

MakeFriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
