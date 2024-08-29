import { createContext, useState, useContext } from "react";

// Create the context with default values
export const AppContext = createContext({
  columns: [],
  setColumns: () => {},
  editingId: null,
  setEditingId: () => {},
  newTitle: "",
  setNewTitle: () => {},
});

// Context provider component
export const AppProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  return (
    <AppContext.Provider
      value={{
        columns,
        setColumns,
        editingId,
        setEditingId,
        newTitle,
        setNewTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for accessing context
export const useAppContext = () => useContext(AppContext);
