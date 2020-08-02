import React from "react";

const TableHeader = React.memo(({ data }) => (
  <thead>
    <tr>
      {data.map(title => (
        <td key={title}>{title}</td>
      ))}
    </tr>
  </thead>
));

const TableRow = React.memo(({ item }) => (
  <tr>
    <td>{item.userId}</td>
    <td>{item.name}</td>
    <td>{item.clientName}</td>
    <td>{item.mobile}</td>
    <td>{item.age}</td>
    <td>{item.relationship}</td>
  </tr>
));

const Table = ({ header, data }) => (
  <table>
    <TableHeader data={header} />
    {data.length === 0 ? (
      <div>No Data Found</div>
    ) : (
      <tbody>
        {data.map(item => (
          <TableRow key={item.name} item={item} />
        ))}
      </tbody>
    )}
  </table>
);

Table.defaultProps = {
  data: [],
  header: []
};

export default Table;
