 import './App.css';
import Users from './Components/Users';
import UsersAxios from './Components/UsersAxios';

function App() {
  return (
    <div className="App">
      <UsersAxios />
     <Users/>
    </div>
  );
}

export default App;
