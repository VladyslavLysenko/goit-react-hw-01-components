import { Profile } from "./Profile";
import { StatisticList } from "./StatList";
import user from 'components/user.json';
import data from 'components/data.json';



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
  
     
    </>
    
  );
};
