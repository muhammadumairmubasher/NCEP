import React, { useEffect, useState, useContext} from "react";
// reactstrap components
import 'font-awesome/css/font-awesome.min.css';
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import { signIn, getAll } from "Service/api";
import { useHistory } from "react-router";
import MovingClouds from "components/MovingClouds";
import { UserContext } from "Main";

// core components
const initialValue = {
  email: "",
  password: "",
}

const SignIn = () => {
  const {state, dispatch} = useContext(UserContext);
  const [user, setUser] = useState(initialValue);
  const history = useHistory();
  const { email, password } = user;


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };
  
  const logInUser = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const response = await signIn(user);
        if(response.status===200){
          dispatch({type:"USER", payload:true});
          // localStorage.setItem("initState", true);
          alert('Welcome! Successfully signIn!');  
          history.push('/universities'); 
        }
      }
      else {
        alert('Invalid Input');
      }      
    } catch (error) {
      alert("Invalid Credentials!"); 
    }
  }

  React.useEffect(() => {
    document.body.classList.add("register-page");
  });

  return (
    <>
      <div className="page-header" style={{ backgroundImage: "url(" + require("assets/img/login-image.jpg").default  + ")" }}>
        <MovingClouds />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card style={{ backgroundColor: '#8fce00' }} className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto ">SIGN IN</h3>
                <div className="social-line text-center">
                  <Button className="btn-neutral btn-just-icon mr-1" color="facebook" href="#" onClick={(e) => e.preventDefault()}>
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button className="btn-neutral btn-just-icon mr-1" color="google" href="#" onClick={(e) => e.preventDefault()} >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button className="btn-neutral btn-just-icon" color="twitter" href="#" onClick={(e) => e.preventDefault()} >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" onChange={(e) => handleChange(e)} name="email" value={email} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" onChange={(e) => handleChange(e)} name="password" value={password} />
                  <Button block className="btn-round" color="danger" onClick={(e) => logInUser(e)}>Sign In</Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default SignIn;
