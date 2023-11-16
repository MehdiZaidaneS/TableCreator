import React, { useEffect, useState}from 'react';
import { useGlobalContext } from '../../context/globalContext';
import "./Tables.css"

const Tables = () => {

    const {tables, rows, getRows, getTables, deleteTable, deleteRow} = useGlobalContext()

    
    useEffect(()=>{
        getRows()
        getTables()
        console.log(rows)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   


    const [sort, setSort] = useState(false)
     


  if(sort===true)
  {
    rows.sort((a,b) => {
      if(a.tableData1 < b.tableData1) { return -1; }
      if(a.tableData1 > b.tableData1) { return 1; }
      return 0;
    })
    setSort(false)
  }




  
  



    


   


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
                       <th><button onClick={()=> setSort(true)}>{table.tableHeading1}</button></th>
                       <th><button onClick={()=> setSort(true)}>{table.tableHeading2}</button></th>
                       {table.tableHeading3 != null ? <th>{table.tableHeading3}</th> : null}
                       {table.tableHeading4 != null ? <th>{table.tableHeading4}</th> : null}
                       <th><button type="button" className="deleteTable" onClick={() => deleteTable(table._id)}>Borrar</button></th>
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