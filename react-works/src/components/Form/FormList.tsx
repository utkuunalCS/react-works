import React from "react";
import Form, { IForm } from "./Form";

export interface IFormList{
    id: string,
    list: IForm[];
};

const FormList = () => {

    const saveFormListDataHandler = (enteredFormData) => {
        const formData = {
            ...enteredFormData,
            id: 9876
        };
        console.log(formData);
    };

  return (
    <div>
      {" "}
      <h3>Please Enter All Required Fields</h3>
      <div>
        <Form onSaveFormData={saveFormListDataHandler}></Form>
      </div>
    </div>
  );
};
export default FormList;
