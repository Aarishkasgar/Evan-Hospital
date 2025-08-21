import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import evanlogo from "../../assets/evan-logo.png";
import "../Navigation/NavRes.css";
const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer className="nav-container">
        <DrawerButton onClick={toggleDrawer} className="drawer-btn">
          <FaBars className="FaBars-line"/>
        </DrawerButton>
        <SNavbarBrand className="logo-brand">
          <img src={evanlogo} alt="logo" width={100} className="evan-logo"/>
        </SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <LoginButton className="nav-login-btn">
            <a
              href="http://192.168.0.146:1082/viphahms/doctorwiseopdprocedurereport/index"
              className="NavLoginBtn"
            >
              Login
            </a>
          </LoginButton>
          <LoginButton className="nav-login-btn nav-login-btn1">
            <a
              href="http://103.55.40.85:1098/"
              className="NavLoginBtn"
            >
              Book Appointment
            </a>
          </LoginButton>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: white; //navbar background color white
  position: relative;
  top: 0px;
  box-shadow: 1px 0px 5px gray;
  padding: 7px 0px;
  z-index: 10;
  font-family: "Lato", sans-serif;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 80px;
  // max-width: 1300px;
  width: 86vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #01597d; // text color
  font-weight: 700;
  // background-color: white; //navbar background color white
`;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
  display: flex;
  align-items: center;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1.1vw; //nevbar font size
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: #01597d; //text color
  font-weight: 700;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: #f9a61a;
    // background-color: white;
    // box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  // background-color: ;
  // border: 1px solid black;
  border: none;
  border-radius: 3rem;
  transition: 0.3s ease;

  // &:hover {
  //   transition: 0.3s ease;
  //   border: 1px solid transparent;
  //   background-color: black;
  //   box-shadow: 0px 0px 7px white;
  // }
`;
