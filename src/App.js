import React, { useState } from 'react';
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';



function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const[users,setUsers] = useState(usersData) //recibe los datos de la variable usersData


  //Agregando usuarios
  const addUser = (user)=>  //el parámetro user es nuevo, no se ha utilizado en ninguna parte
  {//la data de user viene de la const onSubmit del componente adduserform
    user.id = uuidv4()
    setUsers([ //realiza la copia del state users, ya que allí se tienen los datos
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) =>
  {
    const arrayFiltrado =users.filter(user => user.id !== id)

    setUsers(arrayFiltrado) // si el id que está guardado es igual al id que se está mandando, se guarda en el .filter, si son iguales lo va a excluir
  }


  //Editar usuarios
  const [editing,setEditing] = useState(false);

  const[currentUser,setCurrentUser] = useState(
    {
      id: null, name: '',username:''
  });


  const editRow =(user) =>{
    setEditing(true)
    setCurrentUser( //obtiene la informacion actual del usuario
      {
        id : user.id, name:user.name, username: user.username
      })
  }

  const updateUser=(id, updateUser) =>
  {
    setEditing(false)
    setUsers(users.map (user=>user.id=== id ? updateUser : user)) //si el id conincide, se actuaaliza le nuevo usuario, de lo contrario, se sigue mostrando el mismo
   
    
    //se realiza el recorrido para poder obtener todos los usuarios  y actualizar
  }


  return (
    
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          
          {
           editing ? ( //esto se hace para que no se replique el forms del edituser y el add
            <div>
              <h2>Edit user</h2> 
              <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
                />
            </div>
          ):(
            <div>
            <h2>Add user</h2>
            <AddUserForm addUser ={addUser}  />
            </div>
          )}

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users = {users} 
          deleteUser={deleteUser}
          
          editRow={editRow} //se utiliza el props para poderlo hacer dinámico
          />
        </div>
      </div>
    </div>
  );
}

export default App;
