import React, { useState } from 'react';
import "./CreateTable.css"
import { useGlobalContext } from '../../context/globalContext';

const CreateTable = () => {

const {addTable, error, setError, tables} = useGlobalContext()





 const [inputState, setInputState] = useState({
    tableName: "",
    tableHeading1: "",
    tableHeading2: "",
    tableHeading3: "",
    tableHeading4: ""   
})


const [done, setDone] = useState("")

const [sameNameErr, setSameNameErr] = useState("")

const {tableName, tableHeading1 , tableHeading2, tableHeading3, tableHeading4 } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError("")
        setDone("")
}





  const handleSubmit = e => {

    e.preventDefault()

    const isNameExists = tables.some(table => table.tableName === tableName);

     if (isNameExists) {
       setSameNameErr(tableName + " already exists!")
       
     } else {
       addTable(inputState);
       if(tableName!== "" && tableHeading1 !== "" && tableHeading2 !== ""){
           setInputState({
                   tableName: "",
                   tableHeading1: "",
                   tableHeading2: "",
                   tableHeading3: "",
                    tableHeading4:""
           })
           setDone("Table created successfully!")
           setSameNameErr("")
       }
  }
   

}



    return (
        <div className='container'>
            <h1>Create table</h1>
            {error && 
            <p>{error}</p>}
            {done && 
            <p style={{color: "green"}}>{done}</p>}
            {
              sameNameErr!== "" &&
              <p>{sameNameErr}</p>
            }
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" placeholder="*Set table name..." value={tableName} name={"tableName"}  onChange={handleInput("tableName")}></input>
              </div>
              <div>
              <input type="text" placeholder="*Table heading 1..." value={tableHeading1} name={"tableHeading1"} onChange={handleInput("tableHeading1")}></input>
                <input type="text" placeholder="*Table heading 2..." value={tableHeading2} name={"tableHeading2"} onChange={handleInput("tableHeading2")}></input>
              </div>
              <div>
              <input type="text" placeholder="Table heading 3..." value={tableHeading3} name={"tableHeading3"} onChange={handleInput("tableHeading3")}></input>
              <input type="text" placeholder="Table heading 4..." value={tableHeading4} name={"tableHeading4"}  onChange={handleInput("tableHeading4")}></input>
              
              </div>
              <button>Submit</button>
            
          </form>
        </div>
    );
};

export default CreateTable;