import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" >Sports Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <li className='topLink'>
                <Link to="/">
                  HOME
                </Link>
              </li>

            </NavItem>
            <NavItem>
              <li className='topLink'>
                <Link to="/write">
                  WRITE
                </Link>
              </li>

            </NavItem>

            {user ? (
              <NavItem>
                <li className='topLink' onClick={handleLogout}>
                  {user && "LOGOUT"}
                </li>
              </NavItem>

            ) : (
              <>
                <NavItem>
                  <li className='topLink'>
                    <Link to="/login">
                      LOGIN
                    </Link>
                  </li>
                </NavItem>
                <NavItem>
                  <li className='topLink'>
                    <Link to="/register">
                      REGISTER
                    </Link>
                  </li>
                </NavItem>

              </>
            )}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}