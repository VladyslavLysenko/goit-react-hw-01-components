import { Profile } from "./Profile";
import user from 'components/user.json';
import data from 'components/data.json';
import { StatisticList } from "./StatList";


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

      <StatisticList data = {data} />
      



      {/* <StatisticList title="Upload stats" stats={data} /> */}
      {/* <StatisticList stats={data} /> */}
     
    </>
    
  );
};
