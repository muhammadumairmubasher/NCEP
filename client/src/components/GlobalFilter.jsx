import react from 'react'
export const GlobalFilter=({filter,setFilter})=>{
    return (
        <span>
            search:{''}
            <input value={filter ||'' } onChange={(e)=>setFilter(e.target.value)} />
        </span>
    )
}