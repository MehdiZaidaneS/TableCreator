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

   const deleteTable = async(id) =>{
      const response = await axios.delete(`${PORT_URL}delete-table/${id}`)
         getTables()
         console.log(response)
   }

   const deleteRow = async(id) =>{
      const response = await axios.delete(`${PORT_URL}delete-row/${id}`)
         getRows()
         console.log(response)
   }

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
            addRow,
            deleteTable,
            deleteRow
        }}>
             {children}
        </GlobalContext.Provider>    
    )
}




export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}