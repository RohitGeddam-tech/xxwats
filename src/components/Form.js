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
          onChange={handleChange}
        />
        {errors.name && <h1>{errors.name}</h1>}
        <TextField
          className="textfield"
          id="standard-basic"
          label="Phone Number"
          name="mob"
          value={values.mob}
          onChange={handleChange}
          onClick={handleClick}
          InputProps={
            clicked
              ? {
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }
              : null
          }
        />
        {errors.mob && <h1>{errors.mob}</h1>}
        <TextField
          className="textfield"
          id="standard-basic"
          onClick={handleClick}
          label="Email-Address"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <h1>{errors.email}</h1>}
        <button type="submit" className="formbtn">
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          className="textfieldmob"
          id="standard-basic"
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <h1>{errors.name}</h1>}
        <TextField
          className="textfieldmob"
          id="standard-basic"
          label="Phone Number"
          name="mob"
          value={values.mob}
          onChange={handleChange}
          onClick={handleClick}
          InputProps={
            clicked
              ? {
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }
              : null
          }
        />
        {errors.mob && <h1>{errors.mob}</h1>}
        <TextField
          className="textfieldmob"
          id="standard-basic"
          label="Email-Address"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <h1>{errors.email}</h1>}
        <button type="submit" className="formbtn">
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
