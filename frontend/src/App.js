import axios from "axios"
import { useState } from "react";




const PORT_URL= "http://localhost:5000/api/v1/"


function App() {
  
  
  const [error, setError] = useState("")
  const [tables, setTables] = useState([])
  const [inputState, setInputState] = useState({
    title: "",
    column1: "",
    columnData: "",
  })


  const getTables = async() =>{
    const response = await axios.get(`${PORT_URL}get-tables`)
    setTables(response.data);
  }


  const addTable = async(table) =>{
    const response = await axios.post(`${PORT_URL}add-table`, table)
        .catch((err) =>{
           setError(err)
        })
     getTables() 
     console.log(response) 
  }


  const {title, column1 , columnData } = inputState;
  
  const handleInput = name => e => {
      setInputState({...inputState, [name]: e.target.value})
      setError("")
  }


  const handleSubmit = e => {
    e.preventDefault()
    addTable(inputState);
    getTables()
    setInputState({
      title: "",
      column1: "",
      columnData: "" 
    })
  }

 




  return (
    <div className="App">
      <p>{error}</p>
      <h1>Hello</h1>
      {
        tables.map((table) =>{
          // const {title, column1, columnData} = table;
          return(
            <div key={table._id}>
              <h1>{table.title}</h1>
              <h2>{table.column1}</h2>
              <h3>{table.columnData}</h3>
             </div> 
          )
        })
      }
      <button onClick={() =>getTables()}>get tables</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title}  onChange={handleInput("title")}></input>
        <input type="text" placeholder="column1" value={column1} onChange={handleInput("column1")}></input>
        <input type="text" placeholder="column2" value={columnData} onChange={handleInput("columnData")}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
