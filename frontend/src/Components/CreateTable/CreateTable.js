import React, { useState } from 'react';
import "./CreateTable.css"
import { useGlobalContext } from '../../context/globalContext';

const CreateTable = () => {

    const {addTable} = useGlobalContext()


 const [inputState, setInputState] = useState({
    tableName: "",
    tableHeading1: "",
    tableHeading2: "",
    tableHeading3: null,
    tableHeading4: null
    
})

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
}


  const handleSubmit = e => {
     e.preventDefault()
      addTable(inputState);
      setInputState({
        tableName: "",
        tableHeading1: "",
        tableHeading2: "",
        tableHeading3: null,
       tableHeading4: null
      })
}



    return (
        <div className='container'>
            <h1>Create table</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Set table name...*"   onChange={handleInput("tableName")}></input>
                <input type="text" placeholder="Table heading 1...*"  onChange={handleInput("tableHeading1")}></input>
                <input type="text" placeholder="Table heading 2...*"  onChange={handleInput("tableHeading2")}></input>
                <input type="text" placeholder="Table heading 3..."  onChange={handleInput("tableHeading3")}></input>
                <input type="text" placeholder="Table heading 4..."  onChange={handleInput("tableHeading4")}></input>
            <button>Submit</button>
          </form>
        </div>
    );
};

export default CreateTable;