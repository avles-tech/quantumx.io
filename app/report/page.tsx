import React, { useState, useEffect, useRef } from 'react';
import { useTable } from 'react-table';
import { useReactToPrint } from 'react-to-print';
import fetchDataFromDB from './fetchDataFromDB';  // Import the function from where it's defined

const AttendanceSummary = () => {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const componentRef = useRef();

  useEffect(() => {
    if (department && year && month) {
      fetchDataFromDB(department, year, month).then((fetchedData) => {
        // Transform fetchedData into the format needed by react-table
        // Calculate monthly and yearly totals
        // This is just an example; you'll need to adjust this based on your actual data structure
        const transformedData = fetchedData.map((employee) => {
          let monthlyTotal = 0;
          const dailyHours = {};
          employee.attendanceLogs.forEach((log) => {
            const date = new Date(log.dateTime);
            const day = date.getDate();
            if (!dailyHours[day]) {
              dailyHours[day] = { in: date, out: date };
            } else {
              dailyHours[day].in = new Date(Math.min(dailyHours[day].in, date));
              dailyHours[day].out = new Date(Math.max(dailyHours[day].out, date));
            }
          });
          Object.values(dailyHours).forEach(({ in: inTime, out: outTime }) => {
            const hours = (outTime - inTime) / 3600000;  // Convert milliseconds to hours
            monthlyTotal += hours;
          });
          return {
            empId: employee.empId,
            name: employee.name,
            ...dailyHours,
            monthlyTotal,
          };
        });
        setData(transformedData);

        // Generate column definitions for react-table
        const daysInMonth = new Date(year, month, 0).getDate();
        const dayColumns = Array.from({ length: daysInMonth }, (_, i) => ({
          Header: (i + 1).toString(),
          accessor: (i + 1).toString(),
        }));
        setColumns([
          { Header: "Emp. No", accessor: "empId" },
          { Header: "Name", accessor: "name" },
          ...dayColumns,
          { Header: "Month Total", accessor: "monthlyTotal" },
        ]);
      });
    }
  }, [department, year, month]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div>
      <h1>Attendance Summary</h1>
      <label>
        Department:
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <label>
        Month:
        <input type="text" value={month} onChange={(e) => setMonth(e.target.value)} />
      </label>
      <button onClick={() => useReactToPrint({ content: () => componentRef.current })}>
        Export to PDF
      </button>
      <div ref={componentRef}>
        <table {...getTableProps()}>
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
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceSummary;
