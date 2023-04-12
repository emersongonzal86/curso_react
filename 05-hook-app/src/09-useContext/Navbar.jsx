import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary roundes-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            
            <NavLink 
                className={( { isActive }) => `nav-link ${ isActive ? 'active' : ''}`}
                to="/" >
              Home
            </NavLink>

            <NavLink 
                className={( { isActive }) => `nav-link ${ isActive ? 'active' : ''}`}
                to="/about" >
              About
            </NavLink>

            <NavLink 
                className={( { isActive }) => `nav-link ${ isActive ? 'active' : ''}`}
                to="/Login" >
              Login
            </NavLink>
           
            
          </div>
        </div>
      </div>
    </nav>
  )
}


