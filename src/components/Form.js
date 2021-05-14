import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import InputAdornment from "@material-ui/core/InputAdornment";
import SliderService from "./SliderService";
import Serv from './ServiceSlider'

const FormDesk = () => {
  const [isChecked, setChecked] = useState([]);
  const [validity, setValidity] = useState(false);
  const [form, setForm] = useState({});
  const [formEmpty, setFormEmpty] = useState(false);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailID, setEmailID] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneNoInvalid, setPhoneNoInvalid] = useState(false);
  const [emailIdInvalid, setEmailIdIInvalid] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "phoneNo":
        setPhoneNo(e.target.value);
        setPhoneNoInvalid(!e.target.validity.valid);
        break;
      case "emailID":
        setEmailID(e.target.value);
        setEmailIdIInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every((each) => each === "")) {
      setFormEmpty(true);
      setValidity(false);
    } else {
      setFormEmpty(false);
    }

    if (!(nameInvalid || phoneNoInvalid || emailIdInvalid)) {
      setValidity(true);
      setForm({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phoneNo: phoneNo,
        emailID: emailID,
        services: isChecked.join(", "),
      });
    } else {
      setValidity(false);
    }
  };

  useEffect(() => {
    if (validity) {
      axios
        .post("https://mailserver.alokshenoy.com/form-submit/", form)
        .then((res) => {
          setFormEmpty(false);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(form)
  }, [form, validity]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Serv initialChecked={isChecked} passChecked={setChecked} />
        <TextField
          className="textfield"
          label="Name"
          name="name"
          value={name}
          inputProps={{ pattern: "^([A-Za-z ,.'`-]{2,30})$" }}
          type="text"
          onChange={handleChange}
          required
        />
        {nameInvalid ? <h1>Please provide a valid name</h1> : ""}
        <TextField
          className="textfield"
          label="Phone Number"
          name="phoneNo"
          value={phoneNo}
          onChange={handleChange}
          type="tel"
          required
          inputProps={{
            pattern: "^[0-9]{10}$",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />
        {phoneNoInvalid ? <h1>Please provide a valid phone no.</h1> : ""}

        <TextField
          className="textfield"
          label="Email-Address"
          name="emailID"
          value={emailID}
          type="email"
          inputProps={{
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          }}
          onChange={handleChange}
          required
        />

        {emailIdInvalid ? <h1>Please provide a valid emailID</h1> : ""}

        <button type="submit" className="formbtn" onClick={handleSubmit}>
          get a call back
        </button>
        {formEmpty ? (
          <h1 style={{ paddingTop: "1em" }}>Please fill in the form</h1>
        ) : (
          ""
        )}
        {success ? (
          <h1 style={{ paddingTop: "1em", color: "forestgreen" }}>
            Someone will be in touch shortly
          </h1>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

const FormMob = () => {
  const [isChecked, setChecked] = useState([]);
  const [validity, setValidity] = useState(false);
  const [form, setForm] = useState({});
  const [formEmpty, setFormEmpty] = useState(false);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailID, setEmailID] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneNoInvalid, setPhoneNoInvalid] = useState(false);
  const [emailIdInvalid, setEmailIdIInvalid] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "phoneNo":
        setPhoneNo(e.target.value);
        setPhoneNoInvalid(!e.target.validity.valid);
        break;
      case "emailID":
        setEmailID(e.target.value);
        setEmailIdIInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every((each) => each === "")) {
      setFormEmpty(true);
      setValidity(false);
    } else {
      setFormEmpty(false);
    }

    if (!(nameInvalid || phoneNoInvalid || emailIdInvalid)) {
      setValidity(true);
      setForm({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phoneNo: phoneNo,
        emailID: emailID,
        services: isChecked.join(", "),
      });
    } else {
      setValidity(false);
    }
  };

  useEffect(() => {
    if (validity) {
      axios
        .post("https://mailserver.alokshenoy.com/form-submit/", form)
        .then((res) => {
          setFormEmpty(false);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [form, validity]);

  return (
    <>
      <form onSubmit={handleSubmit} className="formAlign">
        <SliderService initialChecked={isChecked} passChecked={setChecked} />
        <TextField
          className="textfieldmob"
          label="Name"
          name="name"
          value={name}
          inputProps={{ pattern: "^([A-Za-z ,.'`-]{2,30})$" }}
          type="text"
          onChange={handleChange}
          required
        />
        {nameInvalid ? <h1>Please provide a valid name</h1> : ""}
        <TextField
          className="textfieldmob"
          label="Phone Number"
          name="phoneNo"
          value={phoneNo}
          onChange={handleChange}
          type="tel"
          required
          inputProps={{
            pattern: "^[0-9]{10}$",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
        />
        {phoneNoInvalid ? <h1>Please provide a valid phone no.</h1> : ""}

        <TextField
          className="textfieldmob"
          label="Email-Address"
          name="emailID"
          type="email"
          value={emailID}
          inputProps={{
            pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
          }}
          onChange={handleChange}
          required
        />

        {emailIdInvalid ? <h1>Please provide a valid emailID</h1> : ""}

        <button type="submit" className="formbtn" onClick={handleSubmit}>
          get a call back
        </button>
        {formEmpty ? (
          <h1 style={{ paddingTop: "1em" }}>Please fill in the form</h1>
        ) : (
          ""
        )}
        {success ? (
          <h1 style={{ paddingTop: "1em", color: "forestgreen" }}>
            Someone will be in touch shortly
          </h1>
        ) : (
          ""
        )}
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
