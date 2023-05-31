import React, { useState } from 'react';
import Buttons from './Components/Buttons';
import ListaUsuarios from './Components/ListaUsuarios';
import './App.css';
import './Components/Buttons';

function App() {
  const [users, setUsers] = useState([]);

  const newUser = async () => {
    const respuesta = await fetch('https://randomuser.me/api/?gender=female');
    const { results } = await respuesta.json();
    const newUser = { ...results[0], activo: true };
    setUsers([...users, newUser]);
  };

  const cambiarActivo = (id) => {
    const newUsers = [...users];
    const userChange = newUsers.find((user) => user.login.uuid === id);
    userChange.activo = !userChange.activo;
    setUsers(newUsers);
  };

  const modifyUserName = (newName) => {
    const newUsers = [...users];
    newUsers.forEach((user) => {
      if (user.activo) {
        user.name.first = newName;
      }
    });
    setUsers(newUsers);
  };

  const deleteUsers = () => {
    const newUsers = users.filter((user) => !user.activo);
    setUsers(newUsers);
  };

  return (
    <>
      <div className='Container'>
        <Buttons newUser={newUser} deleteUsers={deleteUsers} modifyUserName={modifyUserName} />
        <div className='container-card'>
          <ListaUsuarios
            users={users}
            cambiarActivo={cambiarActivo}
            modifyUserName={modifyUserName}
          />
        </div>
      </div>
    </>
  );
}

export default App;
