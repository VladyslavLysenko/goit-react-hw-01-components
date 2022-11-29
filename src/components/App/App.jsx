import { Profile } from "../Profile/Profile";
import { StatisticList } from "../StatList/StatList";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

import user from 'components/DataBase/user.json';
import data from 'components/DataBase/data.json';
import friends from 'components/DataBase/friends.json'
import transactions from 'components/DataBase/transactions.json';
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";


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

       <GlobalStyle />
    </>

   
    
  );
};

// Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей.
// Стилизация выполнена CSS-модулями или Styled Components, поэтому классы в результирующем DOM будут отличаться от примеров.