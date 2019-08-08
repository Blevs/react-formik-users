import React, { useState } from 'react';
import './App.css';
import Form from './Form.js';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = user => {
    setUsers([...users, user]);
  };
  return (
    <div className="App">
      <Form addUser={addUser}/>
      {users.map(user => <div key={user.id}>{JSON.stringify(user)}</div>)}
    </div>
  );
}

export default App;
