import Container from "./components/Container";
import Friendlist from "./components/FriendList";
import friends from "./components/FriendList/friends.json";
import Profile from "./components/Profile";
import user from "./components/Profile/profile.json";

function App() {
  return (
    <div className="App">
      <Container>
        <Friendlist friends={friends} />
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
    </div>
  );
}

export default App;
