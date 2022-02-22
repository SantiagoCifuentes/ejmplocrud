import React from 'react'
import AddUserForm from './AddUserForm';

const UserTable = (props) => {

    

    return (  //no se realiza en fragment porque está envuelto en la etiq
        <table > 
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ? //if
                    props.users.map(user =>( //va a recorrer cada elemento de users y le va añadir lo siguiente
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                        <button 
                        className="button muted-button"
                        onClick={
                            ()=>{props.editRow(user)}
                        }
                        >Edit</button>

                        <button
                         className="button muted-button"
                         onClick={()=> {props.deleteUser(user.id)}}
                        >
                            Delete</button>
                        </td>
                    </tr>
                    )) :( //else
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                    
                }
            
            </tbody>
        </table>
     );
}
 
export default UserTable;