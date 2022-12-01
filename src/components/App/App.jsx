import { Profile } from "../Profile/Profile";
import { StatisticList } from "../StatList/StatList";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

import user from 'dataBase/user.json';
import data from 'dataBase/data.json';
import friends from 'dataBase/friends.json';
import transactions from 'dataBase/transactions.json';
import { GlobalStyle } from "../../GlobalStyle";


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