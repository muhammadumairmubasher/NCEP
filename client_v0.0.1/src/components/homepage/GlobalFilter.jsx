import react from 'react';
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/ncep.scss";
import "assets/demo/demo.css?v=1.3.0";
import { Input } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
export const GlobalFilter=({filter,setFilter})=>{
    return (
        <span >
            <Input placeholder='Global Search ...' className='mt-4' value={filter ||'' } onChange={(e)=>setFilter(e.target.value)} />
        </span>
    )
}