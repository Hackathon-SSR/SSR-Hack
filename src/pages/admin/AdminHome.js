import React from "react";
import NavAdmin from "../../components/navbar/NavAdmin";
import homepage from "../../Assets/homepage.png";

function AdminHome() {
  return (
    <>
      <NavAdmin />
      <div className="container-about">
        <h1>About the Website</h1>
        <img src={homepage} alt="People working in office" />
        <p>
          This application/website is made for easy communication between
          employees during the pandemic and post pandemic. We have use MERN
          stack for the development.
          <br />
          With the offices reopening and employees returning back to work, we
          needed a system to make things easier for the communication and easy
          access to recent and updates related to Covid-19 precautions
        </p>
      </div>
    </>
  );
}

export default AdminHome;
