import React, { useEffect }from 'react';
import { useGlobalContext } from '../../context/globalContext';
import "./Tables.css"

const Tables = () => {

    const {tables, rows, getRows, getTables, deleteTable, deleteRow} = useGlobalContext()

    
    useEffect(()=>{
        getRows()
        getTables()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div className='tables'>
          {
            tables.map((table) =>{
              
              return(
                <div key={table._id} className='table'>
                  <h1>{table.tableName}</h1>
                  <table>
                    <tbody>
                    <tr>
                       <th>{table.tableHeading1}</th>
                       <th>{table.tableHeading2}</th>
                       {table.tableHeading3 != null ? <th>{table.tableHeading3}</th> : null}
                       {table.tableHeading4 != null ? <th>{table.tableHeading4}</th> : null}
                       <th><button className="deleteTable" onClick={() => deleteTable(table._id)}>Borrar</button></th>
                     </tr>
                      {
                        rows.map((row) =>{ 
                          if(row.rowName === table.tableName){
                            return(
                              <tr key={row._id}>  
                                <td>{row.tableData1}</td>
                                <td>{row.tableData2}</td>
                                {row.tableData3 != null ? <td>{row.tableData3}</td> : null}
                                {row.tableData4 != null ? <td>{row.tableData4}</td> : null}
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
        </div>
    );
};

export default Tables;