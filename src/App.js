import logo from './logo.svg';
import "./App.css";



import UserProfile from './UserProfile';

const App = () => {
  // Creating a user object in the parent component
  const user = {
    name: 'John Doe',
    age: 30,
    location: 'New York, USA',
    bio: 'Software developer and tech enthusiast.'
  };

  return (
    <div>
      <h1>Welcome to the User Profile</h1>
      {/* Passing individual properties of the user object as props */}
      <UserProfile
        name={user.name}
        age={user.age}
        location={user.location}
        bio={user.bio}
      />
    </div>
  );
};
export default App;