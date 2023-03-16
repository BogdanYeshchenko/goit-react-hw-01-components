import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsBord from './Friends/FriendsBord.jsx';
import Transactions from './Transactions/Transactions';

import user from '../data/user.json';
import data from '../data/stat.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
      />
      <Statistics stats={data} />
      <FriendsBord friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
