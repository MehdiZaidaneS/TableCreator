import React, { useState } from 'react';
import { useGlobalContext } from '../../context/globalContext';

const AddRow = () => {

    const {addRow} = useGlobalContext()


    const [inputStateRow, setInputStateRow] = useState({
       rowName: "",
       tableData1: "",
       tableData2: "",
       tableData3: null,
       tableData4: null
   })

    
    const handleInputRow = name => e => {
    setInputStateRow({...inputStateRow, [name]: e.target.value})  
}


    const handleSubmitRow = e => {
    e.preventDefault()
    addRow(inputStateRow);
    setInputStateRow({
        rowName: "",
        tableData1: "",
        tableData2: "",
        tableData3: null,
        tableData4: null   
    })
}

    return (
        <div>
            <h1>Add row</h1>
          <form onSubmit={handleSubmitRow}>
            <input type="text" placeholder="rowName"   onChange={handleInputRow("rowName")}></input>
            <input type="text" placeholder="tableData1"  onChange={handleInputRow("tableData1")}></input>
            <input type="text" placeholder="tableData2"  onChange={handleInputRow("tableData2")}></input>
            <input type="text" placeholder="tableData3"  onChange={handleInputRow("tableData3")}></input>
            <input type="text" placeholder="tableData4"  onChange={handleInputRow("tableData4")}></input>
            <button>Submit</button>
          </form> 
        </div>
    );
};

export default AddRow;