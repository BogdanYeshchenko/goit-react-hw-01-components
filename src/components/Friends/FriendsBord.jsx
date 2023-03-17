import MakeFriendList from './MakeFriendList';
import css from './Friends.module.css';
import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  return (
    <div className={css.friendListBox}>
      <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <MakeFriendList
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default Friends;

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
