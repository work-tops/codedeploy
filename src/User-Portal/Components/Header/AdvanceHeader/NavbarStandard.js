import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';
import handleNavbarTransparency from '../../../TemplateAssets/helpers/handleNavbarTransparency';
import LandingRightSideNavItem from './LandingRightSideNavItem';
import { topNavbarBreakpoint } from '../../../../config';
import AppContext from '../../../TemplateAssets/context/Context';
import logo from "../../../TemplateAssets/Images/MP-logo.png"
import SearchBar from './SearchBar';


const NavbarStandard = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      variant={isDark ? 'light' : 'dark'}
      fixed="top"
      expand={topNavbarBreakpoint}
      className={classNames('navbar-standard navbar-theme', {
        'bg-100': !navbarCollapsed && isDark,
        'bg-dark': !navbarCollapsed && !isDark
      })}
    >
      <Container>

        <Navbar.Brand className="text-white dark__text-white" as={Link} to="/homepage">
          <img src={logo} width="125px" />
        </Navbar.Brand>
        <div className='ms-2'>
          <Link to="/postjob1">
          <Button className='bg-white border-0' style={{color:'#003f6b'}}>Post a Project</Button>
          </Link>
        </div>
        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className="scrollbar">
          <div className='ms-5 mt-2 w-50'>
            <SearchBar />
          </div>
          <LandingRightSideNavItem />
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
