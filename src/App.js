import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">my shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* exact path에 정확히 맞을때만 사용하려면 */}
      <Route exact path="/">
        <div className='mainbox'>
          <h2 style={{ padding: 30 }}> Hello </h2>
          <p> 안녕하세요 </p>
          <Button variant="primary">Primary</Button>{' '}
        </div>
        <div className="container">
          <div className="row">
            {
              shoes.map((a, i) => {
                return (
                  <Component shoes={shoes[i]}></Component>
                )

              })
            }
          </div>
        </div>
      </Route>
      <Route path="/detail">
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
</div> 
      </Route>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}



    </div>
  );
}

function Component(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoes.img} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
