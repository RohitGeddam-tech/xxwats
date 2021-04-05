import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import InputAdornment from "@material-ui/core/InputAdornment";
import SliderService from "./SliderService";

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

    if (!values.name) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    const data = {
      name: values.name,
      phoneNo: values.mob,
      emailID: values.email.toLowerCase(),
      services: "",
    };
    axios
      .post("https://mailserver.alokshenoy.com/form-submit/", data)
      .then((res) => {
        setValues(values);
        alert("post created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
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

  const [submit, setSubmit] = useState(false);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SliderService />
        <TextField className="textfield" label="Name" name="name" value={values.name} onClick={handleClick} onChange={handleChange} />
        {submit ? <>{errors.name && <h1>{errors.name}</h1>}</> : <>{clicked ? <>{!values.name ? <h1>This Field is required</h1> : null}</> : null}</>}
        <TextField
          className="textfield"
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
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />
        {submit ? (
          <>{errors.mob && <h1>{errors.mob}</h1>}</>
        ) : (
          <>
            {clicked ? (
              <>
                {values.mob ? (
                  <>
                    {!values.mob ? <h1>This Field is required</h1> : null}
                    {!/[0-9]{10}/.test(values.mob) ? <h1>The Mobile no. entered is Invalid</h1> : null}
                  </>
                ) : null}
              </>
            ) : null}
          </>
        )}
        <TextField className="textfield" label="Email-Address" name="email" value={values.email} onClick={handleClick} onChange={handleChange} />
        {submit ? (
          <>{errors.email && <h1>{errors.email}</h1>}</>
        ) : (
          <>
            {clicked ? (
              <>
                {values.email ? (
                  <>
                    {!values.email ? <h1>This Field is required</h1> : null}
                    {!/\S+@\S+\.\S+/.test(values.email) ? <h1>The Email entered is Invalid</h1> : null}
                  </>
                ) : null}
              </>
            ) : null}
          </>
        )}
        <button
          type="submit"
          className="formbtn"
          onClick={() => {
            setSubmit(true);
          }}
        >
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
  const [submit, setSubmit] = useState(false);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    const data = {
      name: values.name,
      phoneNo: values.mob,
      emailID: values.email,
      services: "",
    };
    axios
      .post("https://mailserver.alokshenoy.com/form-submit/", data)
      .then((res) => {
        console.log(res);
        setValues(values);
        console.log("form submitted", data);
        alert("post created successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("form submitted", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formAlign">
        <SliderService />
        <TextField className="textfieldmob" label="Name" name="name" type="text" value={values.name} onClick={handleClick} onChange={handleChange} />
        {submit ? <>{errors.name && <h1>{errors.name}</h1>}</> : <>{clicked ? <>{!values.name ? <h1>This Field is required</h1> : null}</> : null}</>}
        <TextField
          className="textfieldmob"
          label="Phone Number"
          name="mob"
          value={values.mob}
          onChange={handleChange}
          onClick={handleClick}
          type="tel"
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />
        {submit ? (
          <>{errors.mob && <h1>{errors.mob}</h1>}</>
        ) : (
          <>
            {clicked ? (
              <>
                {values.mob ? (
                  <>
                    {!values.mob ? <h1>This Field is required</h1> : null}
                    {!/[0-9]{10}/.test(values.mob) ? <h1>The Mobile no. entered is Invalid</h1> : null}
                  </>
                ) : null}
              </>
            ) : null}
          </>
        )}
        <TextField className="textfieldmob" label="Email-Address" name="email" type="email" value={values.email} onChange={handleChange} />
        {submit ? (
          <>{errors.email && <h1>{errors.email}</h1>}</>
        ) : (
          <>
            {clicked ? (
              <>
                {values.email ? (
                  <>
                    {!values.email ? <h1>This Field is required</h1> : null}
                    {!/\S+@\S+\.\S+/.test(values.email) ? <h1>The Email entered is Invalid</h1> : null}
                  </>
                ) : null}
              </>
            ) : null}
          </>
        )}
        <button
          type="submit"
          className="formbtn"
          onClick={() => {
            setSubmit(true);
          }}
        >
          get a call back
        </button>
      </form>
    </>
  );
};

const Form = () => {
  const [isMobile, setMobile] = useState(window.matchMedia("(max-width:760px)").matches);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.matchMedia("(max-width:760px)").matches);
    });
  });

  return <>{isMobile ? <FormMob /> : <FormDesk />}</>;
};

export default Form;
