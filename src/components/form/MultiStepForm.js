import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal_Info } from "./stepForm/Personal_Info";
import { Vaccine_Info } from "./stepForm/Vaccine_Info";
import { Employee_Info } from "./stepForm/Employee_Info";
import { Review } from "./stepForm/Review";
// import { Submit } from "./stepForm/Submit";
import NavUser from "../navbar/NavUser";

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
          <Personal_Info {...props} />
        </>
      );
    case "Vaccine_Info":
      return (
        <>
          <NavUser />
          <Vaccine_Info {...props} />
        </>
      );
    case "Employee_Info":
      return (
        <>
          <NavUser />
          <Employee_Info {...props} />
        </>
      );
    case "review":
      return (
        <>
          <NavUser />
          <Review {...props} />
        </>
      );
  }

  return <div></div>;
};
