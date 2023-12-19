import React, { useEffect, useState}from 'react';

import { useGlobalContext } from '../../context/globalContext';


import "./Tables.css"

const Tables = () => {

    const {tables, setTables, rows, getRows, getTables, deleteTable, deleteRow, updateRow} = useGlobalContext()

    
    useEffect(()=>{
        getRows()
        getTables()
        console.log(rows)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   

  

    const dragItem=React.useRef(null);
    const dragOverItem= React.useRef(null)


    const handleSort = () =>{

      //duplicate items
      let _tables = [...tables]

      //remove and save the dragged item content
      const draggedItemContent = _tables.splice(dragItem.current, 1)[0]

      //switch the position
      _tables.splice(dragOverItem.current, 0, draggedItemContent)
       
      console.log(dragItem)
      //reset the position ref
      // dragItem.current = null;
      // dragOverItem.current= null

     //update the actual array
     setTables(_tables)


    }


    const [updateHeading, setUpdateHeading] = useState({
      title: "",
      row: "",
      body: ""
    })

     const {body} = updateHeading;


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


    


 



    




    return (
        <div className='tables'>
 
          {
            tables.map((table, index) =>{
              
              return(
                <div key={table._id} className={"table"} 
                draggable
                onDragStart={(e)=> dragItem.current=index}
                onDragEnter={(e)=> dragOverItem.current=index}
                onDragEnd={handleSort}
                onDragOver={(e)=>e.preventDefault}>
                  <h1>{table.tableName}</h1>
                  <table>
                    <tbody>
                    <tr>
                       {table.tableHeading1 !== "" && table.tableHeading1 !== null ? <th>{table.tableHeading1}</th> : null}
                       {table.tableHeading2 !== "" && table.tableHeading2 !== null ? <th>{table.tableHeading2}</th> : null}
                       {table.tableHeading3 !== "" && table.tableHeading3 !== null? <th>{table.tableHeading3}</th> : null}
                       {table.tableHeading4 !== "" && table.tableHeading4 !== null? <th>{table.tableHeading4}</th> : null}
                       <th><button type="button" className="deleteTable" onClick={() => deleteTable(table._id)}>Borrar</button></th>
                       
                     </tr>
                      {
                        rows.map((row) =>{ 
                          if(row.rowName === table.tableName){
                            return(
                              <tr key={row._id}>
                                 {table.tableHeading1 !== "" && table.tableHeading1 !== null ? <td>{row.tableData1}</td> : null}
                                {table.tableHeading2 !== "" && table.tableHeading2 !== null ? <td>{row.tableData2}</td> : null}
                                {table.tableHeading3 !== "" && table.tableHeading3 !== null ? <td>{row.tableData3}</td> : null}
                                {table.tableHeading4 !== "" && table.tableHeading4 !== null ? <td>{row.tableData4}</td> : null}
                                <td><button onClick={()=> deleteRow(row._id)} className='deleteRow'>Delete</button></td>
                              </tr>  
                              )
                          }else{
                            return null
                          }
                          
                        })
                      }          
                    </tbody>
                  </table>   
                 </div> 
              )
            })
          }
          {
                       updateHeading.title !== "" &&
                       <div className='changeForm'>
                          <form onSubmit={handleSubmit}>
                          <input type="text" placeholder="set new row name*" value={body} name={"body"}  onChange={handleInput("body")}></input>
                            <button>Submit</button>
                          </form>
                      </div>
          }
          
          
          
        </div>
    );
};

export default Tables;