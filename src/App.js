import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import Detail  from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {


  // props를 사용하고 싶지 않으면 state를 Detail컴포넌트 파일에 작성해도 되지만
  // 중요한 데이터는 APP컴포넌트에 보관하고 사용한다. 
  // 혹은 redux를 사용.
  let [shoes, shoes변경] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">my shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to = "/">Home</Link></Nav.Link>
              <Nav.Link ><Link to = '/detail'>Detail</Link></Nav.Link>
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

{/* 라우터를 중복으로 허용하지 않음 */}
<Switch> 

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
                  <Card shoes={shoes[i]}></Card>
                )

              })
            }
          </div>
        </div>
      </Route>

        {/* /:id /뒤에 아무글자가 입력되어있던 세부페이지가 보여진다 */}
      <Route path="/detail/:id">
        {/* props 보내기 */}
        <Detail shoes={shoes}/>
      </Route>

      {/* / 뒤의 모든 문자를 의미 */}
      <Route path="/:id"> 
          <div>/뒤에 문자가 있으면 보여주는 것</div>
      </Route>

 </Switch>
    </div>
   
  );
}



function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoes.img} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
