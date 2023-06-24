import React from "react";
import { useTable, useSortBy } from "react-table";

const QuestTable = ({ questData }) => {
  console.log("triggered");
  const columns = React.useMemo(
    () => [
      {
        Header: "Quest Name",
        accessor: "questName", // key from the questData object
      },
      {
        Header: "Experience",
        accessor: "experience",
      },
      {
        Header: "Quest Points",
        accessor: "questPoints",
      },
      {
        Header: "Items",
        accessor: "items",
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    return Object.keys(questData).map((questName) => {
      const quest = questData[questName];
      return {
        questName,
        experience: quest.experience.join("\n"),
        questPoints: quest.questPoints,
        items: quest.items.join("\n"),
      };
    });
  }, [questData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} style={{ width: "100%" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{ borderBottom: "solid 3px" }}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
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
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default QuestTable;
