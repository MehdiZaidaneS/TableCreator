import React, { useEffect, useState } from 'react';
import "./UpdataTables.css"
import { useGlobalContext } from '../../context/globalContext';



const UpdateTables = () => {

    const {error, setError, tables, getTables, getRows, updateRow, deleteTableRow} = useGlobalContext()

   
     useEffect(()=>{
         getTables()
         // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])

    const [done, setDone] = useState("")
   
    const [inputStateRow, setInputStateRow] = useState({
       rowName: "",
       tableData1: "",
       tableData2: "",
       tableData3: "",
       tableData4: ""
   })

    
    const handleInputRow = name => e => {
    setInputStateRow({...inputStateRow, [name]: e.target.value}) 
    setError("")
    setDone("") 
}
   
const {rowName } = inputStateRow;


const [updateHeading, setUpdateHeading] = useState({
    title: "",
    row: "",
    body: ""
  })

   const {body, row} = updateHeading;


   const handleInput = name => e => {
     setUpdateHeading({...updateHeading, [name]: e.target.value})
    
}

  const handleSubmit = e => {

    e.preventDefault()
    //  setUpdateHeading({...updateHeading, title: titulo})
    //  setUpdateHeading({...updateHeading, row: row})
    
     updateRow(updateHeading);
     console.log(updateHeading)
     getRows()
     getTables()
     setUpdateHeading({
      title: "",
      row: "",
      body: "",
  }) 
  }


  const setName = (titles, rowName, body) =>{
    setUpdateHeading({
      title: titles,
      row: rowName,
      body: body,
  }) 
  console.log(updateHeading)
}


   const deleteTable = (title, row) =>{
       const tableRow = {
        title: title,
        row: row
       }
       deleteTableRow(tableRow);
       setUpdateHeading({
        title: "",
        row: "",
        body: "",
    })

   }

   


    return (
        <div className='container'>
            <h1>Update Table</h1>
            {error && 
            <p>{error}</p>}
            {done && 
            <p style={{color: "green"}}>{done}</p>}

            <select required value={rowName} name={"rowName"} onClick={() => setName("", "")}  onChange={handleInputRow('rowName')}   >
                   <option value=""  disabled >Choose Table</option>
                       {
                           tables.map(table =>{
                               return(
                                   <option key={table._id} value={table.tableName}>{table.tableName}</option>
                               )
                           })
                       }
               </select> 
            {
                tables.map(table =>{
                    if(rowName === table.tableName){
                        return(
                            <div key={table._id} className='inputs'>
                               <form onSubmit={handleSubmit} className='updateForm'>
                                  <table>
                                      <tbody>
                                      <tr>
                                        {table.tableHeading1 !== null && table.tableHeading1 !== "" ? 
                                        (row === "tableHeading1" ?
                                        <input type='text' value={body} name={"body"}  onChange={handleInput("body")}></input>
                                        :<th onClick={() => setName(table.tableName, "tableHeading1", table.tableHeading1)}>{table.tableHeading1}</th>) 
                                        : null 
                                        } 

                                        {table.tableHeading2 !== null  && table.tableHeading2 !== "" ? 
                                        (row === "tableHeading2" ?
                                        <input type='text'  value={body} name={"body"}  onChange={handleInput("body")}></input>
                                        : <th onClick={() => setName(table.tableName, "tableHeading2", table.tableHeading2)}>{table.tableHeading2}</th>) 
                                        : null 
                                        } 
                                         


                                        {table.tableHeading3 !== null && table.tableHeading3 !== "" ? (row === "tableHeading3" ?
                                        <input type='text'  value={body} name={"body"}  onChange={handleInput("body")}></input>
                                        : <th onClick={() => setName(table.tableName, "tableHeading3", table.tableHeading3)}>{table.tableHeading3}</th>) 
                                        : null } 
                                        

                                        {table.tableHeading4 !== null && table.tableHeading4 !== "" ? (row === "tableHeading4" ?
                                        <input type='text'  value={body} name={"body"}  onChange={handleInput("body")}></input>
                                        :<th onClick={() => setName(table.tableName, "tableHeading4", table.tableHeading4)}>{table.tableHeading4}</th>) 
                                        : null } 
                                       </tr>
                                       </tbody>
                                   </table>
                                </form>
                                {
                                    row &&
                                    <p className="remove" style={{color: "orange", paddingTop: "15px", cursor:"pointer"}} onClick={()=> deleteTable(table.tableName, row)}>Remove!</p>
                                }
                                
                            </div>
                        )
                    }else{
                        return null
                    }
                })
            }
            
        </div>
    );
};

export default UpdateTables;