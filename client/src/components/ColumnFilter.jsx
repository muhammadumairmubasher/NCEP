import react from 'react'
export const ColumnFilter=({column})=>{
    const {filterValue,setFilter}=column;
    return (
        <span>
            search:{''}
            <input value={filterValue ||'' } onChange={(e)=>setFilter(e.target.value)} />
        </span>
    )
}