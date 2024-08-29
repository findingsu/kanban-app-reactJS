import { AppProvider } from "./context/context";
import { Columns } from "./components/columns";

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Columns />
      </div>
    </AppProvider>
  );
}

export default App;
