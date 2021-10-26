import { useState } from "react";
import NavUser from "../navbar/NavUser";
import Modal from "react-modal";
import "./approval.css";

function Approval() {
  const [issOpen, setIssOpen] = useState(false);
  return (
    <div>
      <NavUser />
      <div className="container">
        <form className="aform">
          <h1>Approval Days</h1>
          <label id="form-label"> First day</label>
          <input type="date" />
          <label id="form-label"> Second day</label>
          <input type="date" />
          <label id="form-label"> Third day</label>
          <input type="date" />
        </form>
        <>
          <button className="mobut" onClick={() => setIssOpen(true)}>
            Submit
          </button>
          <Modal
            className="modal"
            isOpen={issOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setIssOpen(false)}
            style={{
              overlay: {
                backgroundColor: "grey",
              },
              content: {
                textAlign: "center",
              },
            }}
          >
            <h2 style={{ marginTop: "10px" }}>Mail sent to the admin</h2>
            <div>
              <button className="actionss" onClick={() => setIssOpen(false)}>
                Close
              </button>
            </div>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default Approval;
