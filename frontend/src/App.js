import { Route, Routes } from "react-router-dom";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Tables from "./Components/Frontpage/Tables";
import CreateTable from "./Components/CreateTable/CreateTable";
import AddRow from "./Components/AddRow/AddRow";
import UpdateTables from "./Components/UpdateTables/UpdateTables";
import Footer from "./Components/Footer/Footer";




function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/create-table" element={<CreateTable />} />
          <Route path="/add-row" element={<AddRow />} /> 
          <Route path="/update" element={<UpdateTables />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
