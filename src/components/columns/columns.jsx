import { useAppContext } from "../../context/context";

import { addColumn, deleteColumn, updateColumnTitle } from "./columns.utils";

import {
  ColumnsContainer,
  ColumnsList,
  ColumnItem,
  ColumnHeader,
  ColumnTitle,
  ColumnTitleInput,
  AddButton,
  DeleteButton,
} from "./columns.styles";
import { Cards } from "../cards";

export const Columns = () => {
  const { columns, setColumns, editingId, setEditingId } = useAppContext();

  return (
    <ColumnsContainer>
      <ColumnsList>
        {columns.map((column) => (
          <ColumnItem key={column.id}>
            <ColumnHeader>
              {editingId === column.id ? (
                <ColumnTitleInput
                  defaultValue=""
                  placeholder={column.title}
                  onBlur={(e) =>
                    updateColumnTitle(
                      column.id,
                      e.target.value,
                      setColumns,
                      setEditingId
                    )
                  }
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      updateColumnTitle(
                        column.id,
                        e.target.value,
                        setColumns,
                        setEditingId
                      );
                    }
                  }}
                  autoFocus
                />
              ) : (
                <ColumnTitle onClick={() => setEditingId(column.id)}>
                  {column.title}
                </ColumnTitle>
              )}
              <DeleteButton onClick={() => deleteColumn(column.id, setColumns)}>
                x
              </DeleteButton>
            </ColumnHeader>
            <Cards columnId={column.id} />
          </ColumnItem>
        ))}
        {columns.length < 3 && (
          <AddButton onClick={() => addColumn(setColumns)}>
            Add Column
          </AddButton>
        )}
      </ColumnsList>
    </ColumnsContainer>
  );
};
