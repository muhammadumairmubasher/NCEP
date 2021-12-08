import React, { useState, useEffect,useMemo } from 'react';
import { Button, makeStyles } from '@material-ui/core'
import { useTable,useGlobalFilter,useFilters,useSortBy ,usePagination} from 'react-table';
import {COLUMNS} from './columns';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'reactstrap';
import {GlobalFilter} from './GlobalFilter';
import {ColumnFilter} from './ColumnFilter';
const useStyles = makeStyles({
    table: {
        margin: '50px 50px 50px 50px',
        position: 'static'
    },
    thead: {
        '& > *': {
            fontSize: 16,
            background: '#000000',
            color: '#FFFFFF',
            height:110,
        }
    },
    
    row: {
        '& > *': {
            fontSize: 13
        }
    },
})
const AllUniversities = () => {
    let pageHeader = React.createRef();
    let counter = 0;
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    const columns =useMemo(()=>COLUMNS)
    const data =useMemo(()=>users)
    const tableInstance= useTable({
        columns,
        data
    },useFilters,useGlobalFilter,useSortBy,usePagination)
    const {getTableProps,getTableBodyProps,headerGroups,page,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,gotoPage,pageCount,setPageSize,prepareRow,state,setGlobalFilter}=tableInstance;
    const {globalFilter}=state;
    const {pageIndex, pageSize}=state;

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    
    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }
    useEffect(() => {
        getAllUsers();
    },[]);
    return (
        <>
       
            <div
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/fabio-mangione.jpg").default + ")",
                }}
                className="page-header page-header-xs"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
                <div className="moving-clouds" style={{ backgroundImage: "url(" + require("assets/img/clouds.png").default + ")", }} />
            </div>
           
           
                    <GlobalFilter style={{margin:50}} filter={globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()} className={classes.table} border='2' cellPadding='15px'>
                <thead>
                    {headerGroups.map((headerGroup)=>(
                       <tr {...headerGroup.getHeaderGroupProps()} className={classes.thead}>
                           {
                               headerGroup.headers.map((column)=>(
                                   <th{...column.getHeaderProps(column.getSortByToggleProps())}> {column.render("Header")}
                                 
                                   <div>{column.canFilter ? column.render('Filter'): null}</div>
                                   </th>
                                   
                               ))}
                        
                 </tr>
                 

                    ))}
                   
                </thead>
                
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row,i)=>{
                            prepareRow(row);
                            return (<>
                         
                                <tr className={classes.tr} {...row.getRowProps()}>
                                
                                    {
                                        row.cells.map((cell,idx)=>{
                                            return <><td {...cell.getCellProps()}>{cell.render("Cell")}
                                            
                                            </td>
                                           
                                           </>
                                           
                                        })
                                    }
                                   
                                    
                                </tr>
                            
                                </>
                                 );
                               
                               
                        })
                        
                        }
                        
                   
                </tbody>
                
            </table>
            <div>
                
            <span>
                page{''}
                <strong>
                    {pageIndex+1} of {pageOptions.length}
                </strong>{''}
            </span>
            <span>
                | Go to page: {''}
                <input type='number' defaultValue={pageIndex+1}
                onChange={e=>{
                    const pageNumber=e.target.value ? Number(e.target.value)-1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width: '50px'}}/>
                </span>
                <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>

                   {
                       [10,25,50].map(pageSize=>(
                           <option key={pageSize} value={pageSize}>
                               Show {pageSize}
                           </option>
                       ))
                   }
                </select>


            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        
             <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
             <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        
         <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}
export default AllUniversities;