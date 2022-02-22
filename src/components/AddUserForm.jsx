import React from 'react'
import { useForm} from 'react-hook-form'

const AddUserForm = (props) => {

    const {register,handleSubmit,formState: {errors}} = useForm()


    const onSubmit = (data,e) => {
        

        props.addUser(data)
        e.target.reset()//limpia cada uno de los inputs
    }


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
            <button>Add new user</button>
        </form>
     );
}
 
export default AddUserForm;