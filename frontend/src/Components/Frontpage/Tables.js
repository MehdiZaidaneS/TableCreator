import React, { useEffect}from 'react';
import { useGlobalContext } from '../../context/globalContext';
import "./Tables.css"

const Tables = () => {

    const {tables, setTables, rows, getRows, getTables, deleteTable, deleteRow} = useGlobalContext()

    
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
      dragItem.current = null;
      dragOverItem.current= null

     //update the actual array
     setTables(_tables)


    }



  //   const [sort, setSort] = useState(false)
  // if(sort===true)
  // { 
  //   rows.map((row)=>{
  //     if(row.rowName=== "Supervivientes"){
  //       rows.sort((a,b) => {
  //         if(a.tableData1 < b.tableData1) { return -1; }
  //         if(a.tableData1 > b.tableData1) { return 1; }
  //       return 0;
  //      })
  //     }
  //   })
  //    setSort(false)
  //    console.log(rows)
  // }




  
  



    


   


    return (
        <div className='tables'>
 
          {
            tables.map((table, index) =>{
              
              return(
                <div key={table._id} className={dragItem.current!==index ? "table" : "hideTable"} 
                draggable
                onDragStart={(e)=> dragItem.current=index}
                onDragEnter={(e)=> dragOverItem.current=index}
                onDragEnd={handleSort}
                onDragOver={(e)=>e.preventDefault}>
                  <h1>{table.tableName}</h1>
                  <table>
                    <tbody>
                    <tr>
                       <th>{table.tableHeading1}</th>
                       <th>{table.tableHeading2}</th>
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