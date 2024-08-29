import { useAppContext } from "../../context/context";
import {
  addColumn,
  deleteColumn,
  handleUpdateColumnTitle,
} from "./columns.utils";
import styles from "./columns.module.css";

export const Columns = () => {
  const {
    columns,
    setColumns,
    editingId,
    setEditingId,
    newTitle,
    setNewTitle,
  } = useAppContext();

  return (
    <div className={styles.columnsContainer}>
      <div className={styles.columnsList}>
        {columns.map((column) => (
          <div key={column.id} className={styles.columnItem}>
            <div className={styles.columnHeader}>
              {editingId === column.id ? (
                <div className={styles.editSection}>
                  <input
                    type="text"
                    className={styles.columnTitleInput}
                    placeholder={column.title}
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={() =>
                      handleUpdateColumnTitle({
                        editingId,
                        newTitle,
                        setColumns,
                        setEditingId,
                        setNewTitle,
                      })
                    }
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      handleUpdateColumnTitle({
                        editingId,
                        newTitle,
                        setColumns,
                        setEditingId,
                        setNewTitle,
                      })
                    }
                    autoFocus
                  />
                </div>
              ) : (
                <span
                  className={styles.columnTitle}
                  onClick={() => {
                    setEditingId(column.id);
                    setNewTitle(column.title);
                    setNewTitle("");
                  }}
                >
                  {column.title}
                </span>
              )}
              <button
                className={styles.deleteButton}
                onClick={() => deleteColumn(column.id, setColumns)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      {columns.length < 5 && (
        <button
          className={styles.addButton}
          onClick={() => addColumn(setColumns)}
        >
          Add Column
        </button>
      )}
    </div>
  );
};
