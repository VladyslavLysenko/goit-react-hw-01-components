import { Profile } from "./Profile";
import { StatisticList } from "./StatList";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json'
import transactions from 'components/transactions.json';


export const App = () => {
  return (
    <>
     
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticList
        title="Upload stats"
        data={data}
      />
      
      <FriendList
        friends={friends} />
      
      <TransactionHistory transactions={transactions} />
    </>
    
  );
};
