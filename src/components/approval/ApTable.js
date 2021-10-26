import { useMemo, useState } from "react";
import { useTable } from "react-table";
import AData from "./apData.json";
import { COLUMNS } from "./columns";
import "./approv.css";
import NavAdmin from "../navbar/NavAdmin";
import Modal from "react-modal";

function ApTable() {
  const [aprovIsOpen, setAprovIsOpen] = useState(false);

  const [decIsOpen, setDecIsOpen] = useState(false);

  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => AData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <>
      <NavAdmin />
      <div className="table-box">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "inherit",
            marginTop: "40px",
            marginBottom: "40px",
            // marginRight: "180px",
          }}
        >
          Pending Approvals
        </h1>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
                <h3
                  style={{
                    marginLeft: "80px",
                    marginTop: "10px",
                  }}
                >
                  Status
                </h3>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                  <div>
                    <>
                      <button
                        className="actions"
                        style={{
                          width: "100px",
                          background: "#4DED30",
                          marginTop: "10px",
                          // textAlign: "center",
                        }}
                        onClick={() => setAprovIsOpen(true)}
                      >
                        Approve
                      </button>
                      <Modal
                        className="modal"
                        isOpen={aprovIsOpen}
                        shouldCloseOnOverlayClick={false}
                        onRequestClose={() => setAprovIsOpen(false)}
                        style={{
                          overlay: {
                            backgroundColor: "grey",
                          },
                          content: {
                            textAlign: "center",
                          },
                        }}
                      >
                        <h2 style={{ marginTop: "10px" }}>
                          Approval confirmation mail sent
                        </h2>
                        <div>
                          <button
                            className="actionss"
                            onClick={() => setAprovIsOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </Modal>

                      <button
                        className="actions"
                        style={{ width: "100px", background: "#FF8886" }}
                        onClick={() => setDecIsOpen(true)}
                      >
                        Decline
                      </button>
                      <Modal
                        className="modal"
                        isOpen={decIsOpen}
                        shouldCloseOnOverlayClick={false}
                        onRequestClose={() => setDecIsOpen(false)}
                        style={{
                          overlay: {
                            backgroundColor: "grey",
                          },
                          content: {
                            textAlign: "center",
                          },
                        }}
                      >
                        <h2 style={{ marginTop: "10px" }}>Decline mail sent</h2>
                        <div>
                          <button
                            className="actionss"
                            onClick={() => setDecIsOpen(false)}
                          >
                            Close
                          </button>
                        </div>
                      </Modal>
                    </>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ApTable;
