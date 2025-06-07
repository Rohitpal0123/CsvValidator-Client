import "./index.css";
import { Header } from "./components/layout/Header";
import { CsvValidator } from "./components/pages/CsvValidator";

function App() {
  return (
    <>
        <Header />
        <CsvValidator />
    </>
  );
}

export default App;
