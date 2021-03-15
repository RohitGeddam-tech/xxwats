import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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
        } else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = 'The Email entered is Invalid'
        }
    
        if(!values.mob.trim()){
            errors.mob = 'This field is required'
        }else if(!/[0-9]{10}/.test(values.mob)){
            errors.mob = 'The Mobile no. entered is Invalid'
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
                    label='Name'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <h1>{errors.name}</h1>}
                <TextField
                    className='textfield'
                    id="standard-basic"
                    label='Phone Number'
                    name='mob'
                    value={values.mob}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                      }}
                />
                {errors.mob && <h1>{errors.mob}</h1> || 'Email Address'}
                <TextField
                    className='textfield'
                    id="standard-basic"
                    label='Email-Address'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <h1>{errors.email}</h1>}
                <button type='submit' className='formbtn'>get a call back</button>
            </form>
        </>
    )
}

export default Form
