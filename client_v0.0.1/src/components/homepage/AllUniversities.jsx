import React, { useState, useEffect, useMemo } from 'react';
import { Container, makeStyles } from '@material-ui/core'
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './columns';
import { getUsers } from '../../Service/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { GlobalFilter } from './GlobalFilter';
import ProfileData from 'components/users/ProfileData';
const useStyles = makeStyles({
    table: {
        margin: '50px 50px 50px 50px',
        position: 'static'
    },
    thead: {
        '& > *': {
            fontSize: 12,
            background: '#000000',
            color: '#FFFFFF',
            height: 110,
        }
    },

    row: {
        '& > *': {
            fontSize: 10
        }
    },
})
const AllUniversities = (props) => {
    
    const ad = props.ad;
    let pageHeader = React.createRef();
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    const columns = useMemo(() => COLUMNS)
    const data = useMemo(() => users)
    const tableInstance = useTable({
        columns,
        data,
    }, useFilters, useGlobalFilter, useSortBy, usePagination)
    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, pageCount, setPageSize, prepareRow, state, setGlobalFilter, setHiddenColumns, allColumns } = tableInstance;
    const { globalFilter } = state;
    const { pageIndex, pageSize } = state;

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        if (!ad) {
            allColumns.map(column => (column.id === '_id' ?
                column.toggleHidden() : console.log("hello")
            ))

            allColumns.map(column => (column.id === 'hy' ?
                column.toggleHidden() : console.log("hello")
            ))
        }
    }, [])
    

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
            <br />
            {ad === false ?
                        <Container className='mt-4'>
                            <ProfileData />
                        </Container> : null}
            <Container >
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                {/* {ad === false ?<Button variant="contained" color="primary" onClick={() => { }}> Predict Merit</Button>: null} */}
            </Container>
            <br />

            <Table  {...getTableProps()} className={classes.table} border='2' cellPadding='15px'>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={classes.thead}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th{...column.getHeaderProps(column.getSortByToggleProps())}> {column.render("Header", { ad })}

                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </th>
                                ))}

                        </tr>))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row, i) => {
                            prepareRow(row);

                            return (<>
                                <tr className={classes.tr} {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell, idx) => {
                                            return <><td {...cell.getCellProps()} > {cell.render("Cell", { users, setUsers, ad })} </td> </>

                                        })}
                                </tr>
                            </>);
                        })}
                </tbody>
            </Table>
            <div>
                <span>
                    page{''}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{''}
                </span>
                <span>
                    | Go to page: {''}
                    <input type='number' defaultValue={pageIndex + 1}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        style={{ width: '50px' }} />
                </span>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>

                    {
                        [10, 25, 300].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    )
}
export default AllUniversities;