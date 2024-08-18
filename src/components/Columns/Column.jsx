import React from "react";
import { ColumnsContext } from "../../Contexts/ComponentContexts";
import { useColumns } from "./Hooks/UseColumns";
import AddColumnButton from "./ColumnUI/AddColumnBtn";
import DeleteColumnButton from "./ColumnUI/DeleteColumnBtn";
import EditColumnTitle from "./ColumnUI/ColumnTitle";
import HandleCards from "../Card/HandleCard";

export default function Column() {
  const columnMethods = useColumns();

  return (
    <ColumnsContext.Provider value={columnMethods}>
      <div className="columns-container">
        {columnMethods.columns.map((column) => (
          <div key={column.id} className="column">
            <div className="column-header">
              <EditColumnTitle
                columnId={column.id}
                initialTitle={column.title}
              />
              <DeleteColumnButton columnId={column.id} />
            </div>
            <div className="cards-list">
              <HandleCards columnId={column.id} />
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
