import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbarr() {
  return (
    <div class="container">
        <Navbar className="navbar fixed-top navbar-dark bg-primary"  expand="md" collapseOnSelect>
          <h1 className="Math">Math Villa</h1>

          <Navbar.Toggle />
          <Navbar.Collapse>

          <Nav className="NavItems">
          <NavDropdown title ="Find by Action" className="NavDropdown" >
           
            <NavDropdown.Item >
              <Link className="Links" to='Volumes'>Volumes</Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
              <Link className="Links" to='Area'>Area</Link>
            </NavDropdown.Item>
            
            <NavDropdown.Item >
              <Link className="Links" to='Trignometry'>Trignometry</Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
              <Link className="Links" to='Basics'>Basics</Link>
            </NavDropdown.Item>


          </NavDropdown>
          
          
          <NavDropdown title ="Find by Object" className="NavDropdown">
            <NavDropdown.Item >
              <Link className="Links" to='/'>Circle</Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
              <Link className="Links" to='/Triangle'>Triangle</Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
              <Link className="Links" to='/Cylinder'>Cylinder</Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
              <Link className="Links" to='/Sphere'>Sphere</Link>
            </NavDropdown.Item>

          </NavDropdown>
          
          </Nav>

          </Navbar.Collapse>
          
        </Navbar>
       
    </div>
  )
}

export default Navbarr;
