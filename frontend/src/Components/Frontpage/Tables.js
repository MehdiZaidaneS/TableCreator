import React, { useEffect }from 'react';
import { useGlobalContext } from '../../context/globalContext';

const Tables = () => {

    const {tables, rows, getRows, getTables} = useGlobalContext()

    
    useEffect(()=>{
        getRows()
        getTables()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    

// const [inputState, setInputState] = useState({
//      tableName: "",
//       tableHeading1: "",
//      tableHeading2: "",
//      tableHeading3: "",
//       tableHeading4: ""
    
// })

// const [inputStateRow, setInputStateRow] = useState({
//   rowName: "",
//       tableData1: "",
//       tableData2: "",
//       tableData3: "",
//      tableData4: ""
// })



    return (
        <div>
          <h1>Hello</h1>
          {
            tables.map((table) =>{
              
              return(
                <div key={table._id}>
                  <h1>{table.tableName}</h1>
                  <table>
                    <tbody>
                    <tr>
                       <th>{table.tableHeading1}</th>
                       <th>{table.tableHeading2}</th>
                       <th>{table.tableHeading3}</th>
                       <th>{table.tableHeading4}</th>
                     </tr>
                      {
                        rows.map((row) =>{ 
                          if(row.rowName === table.tableName){
                            return(
                              <tr key={row._id}>  
                                <td>{row.tableData1}</td>
                                <td>{row.tableData2}</td>
                                <td>{row.tableData3}</td>
                                <td>{row.tableData4}</td>
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
          
          
    
    
          {/* <h1>Create tables</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="tableName" value={tableName}  onChange={handleInput("tableName")}></input>
            <input type="text" placeholder="tableHeading1" value={tableHeading1} onChange={handleInput("tableHeading1")}></input>
            <input type="text" placeholder="tableHeading2" value={tableHeading2} onChange={handleInput("tableHeading2")}></input>
            <input type="text" placeholder="tableHeading3" value={tableHeading3} onChange={handleInput("tableHeading3")}></input>
            <input type="text" placeholder="tableHeading4" value={tableHeading4} onChange={handleInput("tableHeading4")}></input>
            <button>Submit</button>
          </form>
    
    
          <h1>Add row</h1>
          <form onSubmit={handleSubmitRow}>
            <input type="text" placeholder="rowName"   onChange={handleInputRow("rowName")}></input>
            <input type="text" placeholder="tableData1"  onChange={handleInputRow("tableData1")}></input>
            <input type="text" placeholder="tableData2"  onChange={handleInputRow("tableData2")}></input>
            <input type="text" placeholder="tableData3"  onChange={handleInputRow("tableData3")}></input>
            <input type="text" placeholder="tableData4"  onChange={handleInputRow("tableData4")}></input>
            <button>Submit</button>
          </form> */}
        </div>
    );
};

export default Tables;