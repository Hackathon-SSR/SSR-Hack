import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal_Info } from "./stepForm/Personal_Info";
import { Vaccine_Info } from "./stepForm/Vaccine_Info";
import { Employee_Info } from "./stepForm/Employee_Info";
import { Review } from "./stepForm/Review";
// import { Submit } from "./stepForm/Submit";
import NavUser from "../navbar/NavUser";
import "./form.css";

const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

const steps = [
  { id: "Personal_Info" },
  { id: "Employee_Info" },
  { id: "Vaccine_Info" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "Personal_Info":
      return (
        <>
          <NavUser />
          <div className="form">
            <Personal_Info {...props} />
          </div>
        </>
      );
    case "Vaccine_Info":
      return (
        <>
          <NavUser />
          <div className="form">
            <Vaccine_Info {...props} />
          </div>
        </>
      );
    case "Employee_Info":
      return (
        <>
          <NavUser />
          <div className="form">
            <Employee_Info {...props} />
          </div>
        </>
      );
    case "review":
      return (
        <>
          <NavUser />
          <div className="form1">
            <Review {...props} />
          </div>
        </>
      );
  }

  return <div></div>;
};
