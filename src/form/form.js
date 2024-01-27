import React, { useState } from "react";
import "./form.css";

function Form() {
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [Value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [blur, setBlur] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setValue({ ...Value, [name]: value });

    switch (name) {
      case "firstname":
        if (!value) {
          setError({ ...error, firstname: "Firstname required" });
        } else {
          setError({ ...error, firstname: "" });
        }
        break;
      case "lastname":
        if (!value) {
          setError({ ...error, lastname: "Lastname required" });
        } else {
          setError({ ...error, lastname: "" });
        }
        break;

      case "email":
        if (!value) {
          setError({ ...error, email: "Email required" });
        } else {
          setError({ ...error, email: "" });
        }
        break;
      case "password":
        if (!value) {
          setError({ ...error, password: "Password required" });
        } else {
          setError({ ...error, password: "" });
        }
        break;

      default:
    }
  };

  const handleBlur = ({ target: { name } }) => {
    setBlur({ ...blur, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let blval = Object.values(blur)
    let bluredRes =  blval.every((e)=>e === true);

    let erval = Object.values(error)
    let erRes = erval.every((e)=>e==="");
    
    if(bluredRes && erRes ){
      setValue({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      alert("Data submitted successfully")
    }else{
      alert("Please fill all the data")
    }
    
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={Value.firstname}
          />
          <span className="error">{error.firstname}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            name="lastname"
            type="text"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={Value.lastname}
          />
          <span className="error">{error.lastname}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="e-mail"
            name="email"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={Value.email}
          />
          <span className="error">{error.email}</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={Value.password}
          />
          <span className="error">{error.password}</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
