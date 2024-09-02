import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);
  const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const value = {
    columns,
    setColumns,
    editingId,
    setEditingId,
    cards,
    setCards,
    tasks,
    setTasks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
