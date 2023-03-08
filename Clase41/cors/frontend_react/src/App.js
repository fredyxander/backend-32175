import { useEffect, useState } from 'react';

import './App.css';
import { UsersTable } from './components/UsersTable';
import { UserForm } from './components/UserForm';

//www.servidor1.com
function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const response = await fetch("http://localhost:8080/users");
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      setUsers(jsonResponse.data);
    }
    getData();
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <UserForm/>
        <UsersTable users={users}/>
      </header>
    </div>
  );
}

export default App;
