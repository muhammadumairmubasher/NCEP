// styles
import React, { useState, useContext } from 'react';
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/ncep.scss";
import "assets/demo/demo.css?v=1.3.0";
import Main from './Main';
import { UserContext } from "Main";
import { Button, Container } from 'react-bootstrap';

// others
function App() {
  // const {state, dispatch} = useContext(UserContext);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  // if(admin){
  //   dispatch({type:"USER", payload:true});
  // }

  return (
    <>
      <div className='row justify-content-center'>
        {(user || admin) === true ? null : <Button className='btn btn-primary mr-2 ml-n3' onClick={() => setAdmin(true)}>Admin</Button>}
        {admin ? <Main a={admin} /> : null}
        {(admin || user) === true ? null : <Button className='btn btn-info ml-2' onClick={() => setUser(true) && setAdmin(false)}>user</Button>}
        {user ? <Main a={admin} /> : null}
      </div>
    </>
  )
}
export default App;
