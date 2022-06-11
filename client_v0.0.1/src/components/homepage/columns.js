import React from 'react';
import {ColumnFilter} from './ColumnFilter';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import {getUsers,deleteUser } from '../../Service/api';

const getAllUsers = async (setUsers) => {
    let response = await getUsers();
   setUsers(response.data);
}
const deleteUserData = async (id,setUsers) => {
    await deleteUser(id);
    getAllUsers(setUsers);
}
export const COLUMNS =[
    {
        Header: '#',
       // isVisible:true,
        Cell: (row) => {
          return <div>{Number(row.row.id) + 1}</div>;
        },
        Filter:ColumnFilter,
        disableFilters:true
    },
   
    {
        Header: 'UNIVERSITY NAME',
        accessor:'universityName',
        Cell: (cell) => (
           <Button component={Link} to={`/info/${cell.row.values._id}`}>{cell.row.values.universityName}</Button>),
       // isVisible:true,
        Filter:ColumnFilter
    },
    {
        Header: 'CITY',
        accessor:'city',
       // isVisible:true,
        Filter:ColumnFilter
    },
    {
        Header: 'DEGREE PROGRAM',
        accessor:'degreeProgram',
        //isVisible:true,
        Filter:ColumnFilter
    },
    {
        Header: 'SECTOR',
        accessor:'sector',
       // isVisible:true,
        Filter:ColumnFilter
    },
    // {
    //     Header: 'ELIGIBILITY CRETERIA',
    //     accessor:'eligibilityCriteria',
    //   //  isVisible:true,
    //     Filter:ColumnFilter,
    //     disableFilters:true
    // },
    // {
    //     Header: 'MERIT FORMULA',
    //     accessor:'meritFormula',
    //   //  isVisible:true,
    //     Filter:ColumnFilter,
    //     disableFilters:true
    // },
    {
        Header: 'LAST YEAR MERIT',
        accessor:'lastYearMerit',
      //  isVisible:true,
        Filter:ColumnFilter,
        disableFilters:true
    },
     {
        // Header: 'EDIT',
         Header: (column)=>(column.ad===true?"Edit":false),
         accessor:'_id',
       
        Cell: (cell) => (
            cell.ad===true?<Button component={Link} to={`/edit/${cell.row.values._id}`}><i className='fa fa-edit' style={{ color: 'Blue' }}></i></Button>:null),
        Filter:ColumnFilter,
        disableFilters:true
     },
    {
        //Header: 'DELETE',
        Header: (column)=>(column.ad===true?"DELETE":null),
        accessor:'hy',
        Cell: (cell ) => (
            cell.ad===true?<Button onClick={() => deleteUserData(cell.row.values._id,cell.setUsers)}> <i className='nc-icon nc-simple-remove' style={{ color: 'red' }}></i></Button>:null),
        Filter:ColumnFilter,
        disableFilters:true
    }
]