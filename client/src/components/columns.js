import {ColumnFilter} from './ColumnFilter';
export const COLUMNS =[
   
    {
        Header: 'UNIVERSITY NAME',
        accessor:'universityName',
        Filter:ColumnFilter
    },
    {
        Header: 'CITY',
        accessor:'city',
        Filter:ColumnFilter
    },
    {
        Header: 'DEGREE PROGRAM',
        accessor:'degreeProgram',
        Filter:ColumnFilter
    },
    {
        Header: 'SECTOR',
        accessor:'sector',
        Filter:ColumnFilter
    },
    {
        Header: 'ELIGIBILITY CRETERIA',
        accessor:'eligibilityCriteria',
        Filter:ColumnFilter,
        disableFilters:true
    },
    {
        Header: 'MERIT FORMULA',
        accessor:'meritFormula',
        Filter:ColumnFilter,
        disableFilters:true
    },
    {
        Header: 'LAST YEAR MERIT',
        accessor:'lastYearMerit',
        Filter:ColumnFilter,
        disableFilters:true
    }
]