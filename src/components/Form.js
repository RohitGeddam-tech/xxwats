import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const FormDesk = () => {
  const [values, setValues] = useState({
    name: "",
    mob: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [clicked, setClicked] = useState(false);

  const validate = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "This field is required";
    }

    if (!values.email.trim()) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "The Email entered is Invalid";
    }

    if (!values.mob.trim()) {
      errors.mob = "This field is required";
    } else if (!/[0-9]{10}/.test(values.mob)) {
      errors.mob = "The Mobile no. entered is Invalid";
    }

    return errors;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setClicked(true);
    console.log("clicked", clicked);
  };

  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log("form submitted", values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          className="textfield"
          id="standard-basic"
          label="Name"
          name="name"
          value={values.name}
          onClick={handleClick}
          onChange={handleChange}
        />
        {submit ? <>{errors.name && <h1>{errors.name}</h1>}</> : 
        <>{clicked ?  <>{!values.name ? <h1>This Field is required</h1> : null}</> : null}</>}
        <TextField
          className="textfield"
          id="standard-basic"
          label="Phone Number"
          name="mob"
          value={values.mob}
          onChange={handleChange}
          onClick={handleClick}
          // InputProps={
          //   clicked
          //     ? {
          //         startAdornment: (
          //           <InputAdornment position="start">+91</InputAdornment>
          //         ),
          //       }
          //     : null
          // }
          InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }
          }
        />
        {submit ? <>{errors.mob && <h1>{errors.mob}</h1>}</> : 
        <>{clicked ? <>{values.mob ? <>{!values.mob ? <h1>This Field is required</h1> : null}
          {(!/[0-9]{10}/.test(values.mob)) ? <h1>The Mobile no. entered is Invalid</h1> : null}
        </> : null}</>: null}</> }
        <TextField
          className="textfield"
          id="standard-basic"
          label="Email-Address"
          name="email"
          value={values.email}
          onClick={handleClick}
          onChange={handleChange}
        />
        {submit ? <>{errors.email && <h1>{errors.email}</h1>}</> : 
        <>{clicked ? <>{values.email ? <>{!values.email ? <h1>This Field is required</h1> : null}
          {(!/\S+@\S+\.\S+/.test(values.email)) ? <h1>The Email entered is Invalid</h1> : null}
        </> : null}</>: null}</>}
        <button type="submit" className="formbtn" onClick={()=>{setSubmit(true)}}>
          get a call back
        </button>
      </form>
    </>
  );
};

const FormMob = () => {
  const [values, setValues] = useState({
    name: "",
    mob: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [clicked, setClicked] = useState(false);

  const validate = (values) => {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = "This field is required";
    }

    if (!values.email.trim()) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "The Email entered is Invalid";
    }

    if (!values.mob.trim()) {
      errors.mob = "This field is required";
    } else if (!/[0-9]{10}/.test(values.mob)) {
      errors.mob = "The Mobile no. entered is Invalid";
    }

    return errors;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setClicked(true);
    console.log("clicked", clicked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log("form submitted", values);
  };

  const [submit, setSubmit] = useState(false)

  return (
    <>
      <form onSubmit={handleSubmit} className='formAlign'>
        <TextField
          className="textfieldmob"
          id="standard-basic"
          label="Name"
          name="name"
          value={values.name}
          onClick={handleClick}
          onChange={handleChange}
        />
        {submit ? <>{errors.name && <h1>{errors.name}</h1>}</> : 
        <>{clicked ?  <>{!values.name ? <h1>This Field is required</h1> : null}</> : null}</>}
        <TextField
          className="textfieldmob"
          id="standard-basic"
          label="Phone Number"
          name="mob"
          value={values.mob}
          onChange={handleChange}
          onClick={handleClick}
          // InputProps={
          //   clicked
          //     ? {
          //         startAdornment: (
          //           <InputAdornment position="start">+91</InputAdornment>
          //         ),
          //       }
          //     : null
          // }
          InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }
          }
        />
        {submit ? <>{errors.mob && <h1>{errors.mob}</h1>}</> : 
        <>{clicked ? <>{values.mob ? <>{!values.mob ? <h1>This Field is required</h1> : null}
          {(!/[0-9]{10}/.test(values.mob)) ? <h1>The Mobile no. entered is Invalid</h1> : null}
        </> : null}</>: null}</> }
        <TextField
          className="textfieldmob"
          id="standard-basic"
          label="Email-Address"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {submit ? <>{errors.email && <h1>{errors.email}</h1>}</> : 
        <>{clicked ? <>{values.email ? <>{!values.email ? <h1>This Field is required</h1> : null}
          {(!/\S+@\S+\.\S+/.test(values.email)) ? <h1>The Email entered is Invalid</h1> : null}
        </> : null}</>: null}</>}
        <button type="submit" className="formbtn" onClick={()=>{setSubmit(true)}}>
          get a call back
        </button>
      </form>
    </>
  );
};

const Form = () => {
  const [isMobile, setMobile] = useState(
    window.matchMedia("(max-width:760px)").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:760px)").matches);
    });
  });

  return <>{isMobile ? <FormMob /> : <FormDesk />}</>;
};

export default Form;
