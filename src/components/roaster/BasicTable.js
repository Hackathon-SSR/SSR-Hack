import React, { useMemo } from "react";
import { useTable } from "react-table";
import Ddata from "./Ddata.json";
import { COLUMNS } from "./columns";
import "./table.css";
import NavAdmin from "../navbar/NavAdmin";

function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => Ddata, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <NavAdmin />
      <h1
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        Roaster
      </h1>
      <table {...getTableProps()} className="btable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BasicTable;
