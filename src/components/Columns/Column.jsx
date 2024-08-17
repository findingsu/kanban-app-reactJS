import React, { useState, useRef } from "react";
import { ColumnsContext } from "../../Contexts/ComponentContexts.jsx";
import AddColumnButton from "./Buttons/AddColumnBtn.jsx";
// import HandleCards from "../Card/HandleCard.jsx";
import DeleteColumnButton from "./Buttons/DeleteColumnBtn.jsx";
// import CardList from "../Card/Components/CardList.jsx";
import HandleCards from "../Card/HandleCard.jsx";

export default function Column() {
  const [columns, setColumns] = useState([]);
  const nextColumnId = useRef(1);

  return (
    <ColumnsContext.Provider value={{ columns, setColumns, nextColumnId }}>
      <div className="columns-container">
        {columns.map((column) => (
          <div key={column.id} className="column">
            <div className="column-header">
              <h2>Column {column.id}</h2>
              <DeleteColumnButton columnId={column.id} />
            </div>
            <div className="cards-list">
              <HandleCards columnId={column.id} />
            </div>
          </div>
        ))}
        <AddColumnButton />
      </div>
    </ColumnsContext.Provider>
  );
}
