import React from "react";
import { ColumnsContext } from "../../Contexts/ComponentContexts";
import AddColumnButton from "./ColumnsUI/AddColumnBtn";
import DeleteColumnButton from "./ColumnsUI/DeleteColumnBtn";
import EditColumnTitle from "./ColumnsUI/ColumnTitle";
import Cards from "../Cards/Card";
import { useColumns } from "./UseColumns";
import { FiEdit } from "react-icons/fi";

export default function Column() {
  const columnMethods = useColumns();

  return (
    <ColumnsContext.Provider value={columnMethods}>
      <div className="columns-container">
        {columnMethods.columns.map((column) => (
          <div key={column.id} className="column">
            <div className="column-header">
              <FiEdit style={{ marginRight: "10px", color: "#888" }} />
              <EditColumnTitle
                columnId={column.id}
                initialTitle={column.title}
              />
              <DeleteColumnButton columnId={column.id} />
            </div>
            <div className="cards-list">
              <Cards columnId={column.id} />
            </div>
          </div>
        ))}
        <div className="column-footer">
          <AddColumnButton />
        </div>
      </div>
    </ColumnsContext.Provider>
  );
}
