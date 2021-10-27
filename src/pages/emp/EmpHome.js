import React from "react";
import NavUser from "../../components/navbar/NavUser";
import homepage from "../../Assets/homepage.jpg";
import "./Emp.css";

function EmpHome() {
  return (
    <>
      <NavUser />
      <div className="container-about">
        <h1>About the Website</h1>
        <img src={homepage} alt="People working in office" />
        <p>
          This website is made for easy communication between
          employees during the pandemic and post pandemic scenario.
          <br />
          With the offices reopening and employees returning back to work, we
          needed a system to make things easier for the communication and easy
          access to recent and updates related to Covid-19 precautions
        </p>
        <div className="abt-below">
          <div id="list"> Total number of employees: 100</div>
          <div id="list"> Number of employees allowed: 40</div>
          <div id="list"> Employees in Office: 35</div>
        </div>
      </div>
    </>
  );
}

export default EmpHome;
