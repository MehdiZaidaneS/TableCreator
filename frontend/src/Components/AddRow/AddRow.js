import React, { useEffect, useState } from 'react';
import "./AddRow.css"
import { useGlobalContext } from '../../context/globalContext';

const AddRow = () => {

    const {addRow, error, setError, tables, getTables} = useGlobalContext()

   
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
   
const {rowName, tableData1 , tableData2, tableData3, tableData4 } = inputStateRow;

    const handleSubmitRow = e => {
    e.preventDefault()
    addRow(inputStateRow);
    if(rowName!== "" && tableData1 !== "" && tableData2 !== ""){
        setInputStateRow({
            rowName: "",
            tableData1: "",
            tableData2: "",
            tableData3: "",
            tableData4: ""   
        })
        setDone("Row added successfully!")
    }
}

    return (
        <div className='container'>
            <h1>Add row</h1>
            {error && 
            <p>{error}</p>}
            {done && 
            <p style={{color: "green"}}>{done}</p>}

          <form onSubmit={handleSubmitRow}>
             <select required value={rowName} name={"rowName"}  onChange={handleInputRow('rowName')}   >
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
                rowName === "" &&
                <div  className='inputs'>
                       <div>
                           <input type="text" placeholder="" value={tableData1} name={"tableData1"}  onChange={handleInputRow("tableData1")}></input>
                           <input type="text" placeholder="" value={tableData2} name={"tableData2"} onChange={handleInputRow("tableData2")}></input>
                       </div>
                       <div>
                         <input required type="text" placeholder="" value={tableData3} name={"tableData3"}onChange={handleInputRow("tableData3")}></input>
                         <input required type="text" placeholder="" value={tableData4} name={"tableData4"}onChange={handleInputRow("tableData4")}></input> 
                       </div>
                </div>
               }
               
            
            {
                tables.map(table =>{
                    if(rowName === table.tableName){
                        return(
                            <div key={table._id} className='inputs'>
                                <div>
                                {table.tableHeading1 !== "" && table.tableHeading1 !== null ? <input required type="text" placeholder={table.tableHeading1 ? table.tableHeading1 : "tableData1"} value={tableData1} name={"tableData1"}onChange={handleInputRow("tableData1")}></input> : null}
                                {table.tableHeading2 !== "" && table.tableHeading2 !== null? <input required type="text" placeholder={table.tableHeading2 ? table.tableHeading2 : "tableData2"} value={tableData2} name={"tableData2"}onChange={handleInputRow("tableData2")}></input> : null} 

                                </div>
                                <div>
                                {table.tableHeading3 !== "" && table.tableHeading3 !== null ? <input required type="text" placeholder={table.tableHeading3 ? table.tableHeading3 : "tableData3"} value={tableData3} name={"tableData3"}onChange={handleInputRow("tableData3")}></input> : null}
                                {table.tableHeading4 !== "" && table.tableHeading4 !== null ? <input required type="text" placeholder={table.tableHeading4 ? table.tableHeading4 : "tableData4"} value={tableData4} name={"tableData4"}onChange={handleInputRow("tableData4")}></input> : null} 
                                </div>
                            </div>
                        )
                    }else{
                        return null
                    }
                })
            }
            <button>Add row</button>
          </form> 
        </div>
    );
};

export default AddRow;