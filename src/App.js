import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function App() {
  const [list, setList] = useState(null);
console.log(list)
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setList(res.data)
    setLoading(false)
    } catch (error) {
        console.log(error)
    }
  };
 
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <UserList list={list} loading={loading}>

      </UserList>
    

          
       
    </div>
  );
}

export default App;
