import React, { useState } from "react";

export interface IForm {
  id: string;
  name: string;
  password: string;
}

const Form = ( props ) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const idChangeHandler = (event) => {
    event.preventDefault();

    setId(event.target.value);
    console.log(event.target.value);

    const formData = {

        id: event.target.value,
        name: name,
        password: password,

    };

    props.onSaveFormData(formData);
  };

  const nameChangeHandler = (event) => {
    event.preventDefault();

    setName(event.target.value);
    console.log(event.target.value);

    const formData = {

        id: id,
        name: event.target.value,
        password: password,

    };
    props.onSaveFormData(formData);
  };

  const passwordChangeHandler = (event) => {
    event.preventDefault();

    setPassword(event.target.value);
    console.log(event.target.value);

    const formData = {

        id: id,
        name: name,
        password: event.target.value,

    };
    props.onSaveFormData(formData);
  };

  return (
    <div>
      <div>
        {" "}
        <span>ID: </span>
        <input type={"text"} value={id} onChange={idChangeHandler}></input>{" "}
      </div>
      <div>
        {" "}
        <span>Name: </span>
        <input value={name} onChange={nameChangeHandler}></input>{" "}
      </div>
      <div>
        {" "}
        <span>Password: </span>
        <input value={password} onChange={passwordChangeHandler}></input>{" "}
      </div>
    </div>
  );
};

export default Form;
