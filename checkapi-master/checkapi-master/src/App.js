
import './App.css';
import UserList from './UserList'
function App() {
  return (
    <div className="App">
      <div style={{textAlign:"center",textTransform:"uppercase",color:"lavander"}} ><h2>User List</h2></div>
      <div  style={{letterSpacing:"3px"}}>
    <UserList/></div>
    </div>
  );
}

export default App;
