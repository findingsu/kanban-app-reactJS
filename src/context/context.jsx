import { createContext, useState, useContext } from "react";

// Create the context
export const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const value = {
    columns,
    setColumns,
    editingId,
    setEditingId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for accessing context
export const useAppContext = () => useContext(AppContext);
