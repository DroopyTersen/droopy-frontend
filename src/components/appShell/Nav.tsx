import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import useLocation from "../../hooks/useLocation";

function Nav() {
  return (
    <StyledNav>
      <div className="nav-left">
        <Link to="/">
          <div className="logo">YOUR LOGO</div>
        </Link>
        <div className="nav-links">
          <NavLink path="/one">Screen One</NavLink>
          <NavLink path="/two/droopy-frontend">Screen Two</NavLink>
          <NavLink path="/three">Screen Three</NavLink>
        </div>
      </div>
    </StyledNav>
  );
}

export default React.memo(Nav);

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  padding: 10px 10px;
  background: var(--black);
  a {
    text-decoration: none;
  }
  .logo {
    padding: 5px 10px;
    background: #e6e6e6;
    border-radius: 16px;
    margin-right: 10px;
    color: var(--black);
    font-weight: bolder;
    text-decoration: none;
  }
  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
    > a {
      margin-right: 10px;
      padding: 5px 10px;
      color: var(--light);
      border-bottom: 2px solid transparent;
    }
    > a.active {
      color: var(--white);
      border-bottom-color: var(--primary);
    }
  }
`;

export const checkIsActive = (location, path) => {
  // Current window.location.pathname must start with NavLink path
  return location.pathname.toLowerCase().indexOf(path.toLowerCase()) === 0;
};

export const NavLink = ({ path, children }) => {
  let location = useLocation();
  let cssClass = ["link", checkIsActive(location, path) ? "active" : ""].filter((c) => c).join(" ");
  return (
    <Link className={cssClass} to={path}>
      {children}
    </Link>
  );
};
