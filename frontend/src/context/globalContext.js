import axios from "axios"
import React, { useContext, useState } from "react";


const PORT_URL= "http://localhost:5000/api/v1/"


const GlobalContext = React.createContext();



export const GlobalProvider = ({children}) =>{



   const [error, setError] = useState(null)
   const [tables, setTables] = useState([])
   const [rows, setRows] = useState([])



const getTables = async() =>{
     const response = await axios.get(`${PORT_URL}get-tables`)
     setTables(response.data);
   }

   const getRows = async() =>{
      const response = await axios.get(`${PORT_URL}get-rows`)
      setRows(response.data);
   }


   const addTable = async(table) =>{
     const response = await axios.post(`${PORT_URL}add-table`, table)
         .catch((err) =>{
            setError(err)
         })
      getTables() 
      console.log(response) 
   }

   const addRow = async(row) =>{
     const response = await axios.post(`${PORT_URL}add-row`, row)
         .catch((err) =>{
            setError(err)
         })
     getRows() 
      console.log(response) 
   }


  
  
//    const handleInput = name => e => {
//        setInputState({...inputState, [name]: e.target.value})
//        setError("")
//    }

//    const handleInputRow = name => e => {
//      setInputStateRow({...inputStateRow, [name]: e.target.value})
//      setError("")
//  }


//    const handleSubmit = e => {
//     e.preventDefault()
//      addTable(inputState);
//      getTables()
//      getRows()
//      setInputState({
//        tableName: "",
//        tableHeading1: "",
//        tableHeading2: "",
//        tableHeading3: "",
//       tableHeading4: ""
//      })
//    }


//    const handleSubmitRow = e => {
//      e.preventDefault()
//      addRow(inputStateRow);
//      getTables()
//      getRows()
//      setInputState({
//        rowName: "",
//        tableData1: "",
//        tableData2: "",
//        tableData3: "",
//        tableData4: ""   
// })
//    }



    return(
        <GlobalContext.Provider value={{
            error,
            setError,
            tables,
            setTables,
            rows,
            setRows,
            getTables,
            getRows,
            addTable,
            addRow
        }}>
             {children}
        </GlobalContext.Provider>    
    )
}




export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}