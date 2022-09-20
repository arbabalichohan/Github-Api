import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function MyNav({headers}) {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();
  const HandleSearch = async (e) => {
    let text = search;
    text = text.replaceAll(' ', '+');
    let url = "https://api.github.com/search/repositories?q=" + search + "&sort=stars&order=desc";
    const options = {
      method: 'GET',
      headers: headers
    };
    try{
      const response = await fetch(url, options);
      if (!response.ok){
        throw Error("Could not fetch any data..");
      }else{
        const result = await response.json();
        setIsPending(false);
        navigate("/search-results",{
          state: {
            results: result
          }
        });
        console.log(result);
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="">
      <Navbar bg="dark" expand="lg" className='navbar-dark'>
        <Container fluid>
          <Navbar.Brand>GitHub API</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
              <NavDropdown title="Repositories" id="navbar-repo">
                  <div className="links">
                    <Link to="/repository/create" className='nav-link p-0 m-0 text-dark p-2'>          
                      Create Repository
                    </Link>
                  
                    <Link to="/repository/edit" className='nav-link p-0 m-0 text-dark p-2'>          
                      Update Repository Name
                    </Link>
                  
                    <Link to="/repository/delete" className='nav-link p-0 m-0 text-dark p-2'>          
                      Delete Repository
                    </Link>             
                    <Link to="/repositories" className='nav-link p-0 m-0 text-dark p-2'>          
                      List Repositories
                    </Link>              
                    <Link to="/repository/project/create" className='nav-link p-0 m-0 text-dark p-2'>          
                    Create Repository Project
                    </Link>              
                    <Link to="/repository/projects" className='nav-link p-0 m-0 text-dark p-2'>          
                    List Repository Projects
                    </Link>             
                    <Link to="/repository/branches" className='nav-link p-0 m-0 text-dark p-2'>          
                    List Branches
                    </Link>
                    <Link to="/repository/commits" className='nav-link p-0 m-0 text-dark p-2'>          
                    List Commits
                    </Link>
                    <Link to="/repository/collaborators" className='nav-link p-0 m-0 text-dark p-2'>          
                    List Collaborators
                    </Link>
                  </div>
              </NavDropdown>
              <NavDropdown title="Projects" id="navbar-proj">
                  <Link to="/user/project/create" className='nav-link p-0 m-0 text-dark p-2'>          
                    Create a User Project
                  </Link>
                
                  <Link to="/user/Projects" className='nav-link p-0 m-0 text-dark p-2'>          
                    List User Projects
                  </Link>
                
                
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => {e.preventDefault();}}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value); }}
              />
              <Button variant="outline-light" onClick={(e)=>{
                HandleSearch();
              }}>Search</Button>
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
    
    
  );
}

export default MyNav;