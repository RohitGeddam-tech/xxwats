import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';

const Form = () => {

    const [values, setValues] = useState({
        name:'',
        mob:'',
        email:''
    })

    const [errors, setErrors] = useState({})

    const validate = (values) => {
        let errors = {}

        if(!values.name.trim()){
            errors.name = 'This field is required'
        }
    
        if(!values.email.trim()){
            errors.email = 'This field is required'
        } else if(!/^([a-z][A-Z][0-9]_.-)+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/.test(values.email)){
            errors.email = 'The Email entered is Invalid'
        }
    
        if(!values.mob.trim()){
            errors.mob = 'This field is required'
        }else if(!/[0-9]{10}/.test(values.mobile)){
            errors.mobile = 'The Mobile no. entered is Invalid'
        }

        return errors;
    }

    const handleChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log('form entries', values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    className='textfield'
                    id="standard-basic"
                    label={errors.name && <h1>{errors.name}</h1> || 'Name'}
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />
                <TextField
                    className='textfield'
                    id="standard-basic"
                    label={errors.mob && <h1>{errors.mob}</h1> || 'Phone Number'}
                    name='mob'
                    value={values.mob}
                    onChange={handleChange}
                />
                <TextField
                    className='textfield'
                    id="standard-basic"
                    label={errors.email && <h1>{errors.email}</h1> || 'Email Address'}
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                />
                <button type='submit' className='formbtn'>get a call back</button>
            </form>
        </>
    )
}

export default Form
