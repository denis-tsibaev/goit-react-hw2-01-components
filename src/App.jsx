import Container from "./components/Container";
import Friendlist from "./components/FriendList";
import friends from "./components/FriendList/friends.json";
import Profile from "./components/Profile";
import user from "./components/Profile/profile.json";
import Statistics from "./components/Statistics";
import data from "./components/Statistics/data.json";

function App() {
  return (
    <div className="App">
      <Container>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Friendlist friends={friends} />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Container>
    </div>
  );
}

export default App;
