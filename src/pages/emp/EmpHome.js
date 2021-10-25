import React from "react";
import NavUser from "../../components/navbar/NavUser";
import homepage from "./homepage.png"

function EmpHome() {
  return (
    <>
      <NavUser />
      <div className="container-about">
        <h1>About the Website</h1>
        <img src={homepage} alt="People working in office"/>
        <p>
          This application/website is made for easy communication between employees during the pandemic and post pandemic. 
          We have use MERN stack for the development. 
          <br/>
          With the offices reopening and employees returning back to work,
          we needed a system to make things easier for the communication and easy access to recent and updates related to Covid-19 precautions 
        </p>
      </div>
    </>
  );
}

export default EmpHome;
