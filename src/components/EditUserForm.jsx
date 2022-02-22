import React from 'react'
import { useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    console.log(props.currentUser)

    const {register,handleSubmit,setValue,formState: {errors}} = useForm({
        defaultValues: props.currentUser // se trae la información del editRow
    })

    setValue('name',props.currentUser.name) //estas lineas son las que van a poner el nombre y apellido  en el campo de texto al momento de seleccionar el usuario a editar
    setValue('username',props.currentUser.username)


    const onSubmit = (data,e) => { //la data es lo que llega de los inputs al darle submit
        
        console.log(data)
        data.id=props.currentUser.id
        props.updateUser(props.currentUser.id,data)
        e.target.reset()//limpia cada uno de los inputs
    }
    //validaciones

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" placeholder='name'
                {...register
                ('name',{required: true,
                maxLength:30})}
            />
            {errors.name && errors.name.type === "required" && <span>This is required</span>}

            <label>Username</label>
            <input type="text" name="username" placeholder='username'  
                {...register
                    ('username',{required: true,
                     maxLength:30})}
            />
            {errors.username && errors.username.type === "required" && <span>This is required</span>}
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUserForm;