import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'; 

function MyNav() {
  return (
    <Navbar1 bg="dark" expand="lg" className='navbar-dark'>
      <Container fluid>
        <Navbar.Brand href="#">GitHub API</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Repositories" id="navbar-repo">
              <NavDropdown.Item to="/">
                Create Repository
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Update Repository Name</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Delete Repository
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                List Repositories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Create Repository Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                List Repository Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                List Branches
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                List Commits
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                List Collaborators
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Project" id="navbar-proj">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar1>
  );
}

export default MyNav1;