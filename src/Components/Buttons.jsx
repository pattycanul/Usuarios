import React from 'react';
import './Buttons.css';

export default function Buttons({ newUser, deleteUsers, modifyUserName }) {
const eventAddUser = () => {
    newUser();
};

const eventDeleteUsers = () => {
    deleteUsers();
};

const eventModifyUser = () => {
    const newUserName = prompt('Ingrese el nuevo nombre de usuario');
    if (newUserName) {
    modifyUserName(newUserName);
    }
};

return (
    <>
    <h1>Random Users</h1>
    <div className='buttons'>
        <button className='btn-añadir' onClick={eventAddUser}>
        Añadir usuario
        </button>
        <button className='btn-eliminar' onClick={eventDeleteUsers}>
        Eliminar usuario
        </button>
        <button className='btn-modificar' onClick={eventModifyUser}>
        Modificar usuario
        </button>
    </div>
    </>
);
}
