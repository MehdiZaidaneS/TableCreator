import axios from "axios"
import React, { useContext, useState } from "react";


const PORT_URL= "http://localhost:5000/api/v1/"


const GlobalContext = React.createContext();



export const GlobalProvider = ({children}) =>{



   const [error, setError] = useState(null)
   const [tables, setTables] = useState([])
   let [rows, setRows] = useState([])



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
            setError(err.response.data.message)
         })
      getTables() 
      console.log(response) 
   }

   const addRow = async(row) =>{
     const response = await axios.post(`${PORT_URL}add-row`, row)
         .catch((err) =>{
            setError(err.response.data.message)
         })
     getRows() 
      console.log(response) 
   }

   const updateRow = async(update) =>{
      const response = await axios.post(`${PORT_URL}update-row`, update)
         .catch((err)=>{
            setError(err.response.data.message)
         })
      getTables()
      console.log(response)
   }

   const deleteTableRow = async(tableRow) =>{
     
      const response = await axios.post(`${PORT_URL}update-row`, tableRow)
         .catch((err)=>{
            setError(err.response.data.message)
         })
      getTables()
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

   const sortRow = () =>{
      rows.sort((a,b) => {
        if(a.tableData1 < b.tableData1) { return -1; }
        if(a.tableData1 > b.tableData1) { return 1; }
        return 0;
      })

      console.log(rows)

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
            deleteRow,
            sortRow,
            updateRow,
            deleteTableRow
        }}>
             {children}
        </GlobalContext.Provider>    
    )
}




export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}