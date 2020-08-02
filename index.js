import "./style.css";
import React from "react";
import { render } from "react-dom";
import { Table, InputText } from "./components";
import { generateRandomData } from "./utils";

const HEADER = [
  "UserId",
  "Name",
  "Client Name",
  "Mobile",
  "Age",
  "Relationship Status"
];

function App() {
  const randomData = React.useMemo(() => generateRandomData(100), []);
  const [data, setData] = React.useState(randomData);
  const [filters, setFilters] = React.useState(["name", "mobile", "clientname"]);

  const onTextChange = React.useCallback(e => {
    const query = e.target.value.toLowerCase();

    const filtered = randomData.filter(
      item =>
        filters.filter(filter =>
          item[filter]
            .toString()
            .toLowerCase()
            .includes(query)
        ).length > 0
    );

    setData(filtered);
  }, []);

  return (
    <>
      <InputText onChange={onTextChange} />,
      <Table header={HEADER} data={data} />
    </>
  );
}

render(<App />, document.getElementById("root"));
