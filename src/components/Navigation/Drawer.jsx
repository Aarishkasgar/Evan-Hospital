import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand>Evan Hospital</SNavbarBrand>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <NavRoute
                  onClick={toggleDrawer}
                  to={route.link}
                  key={route.name}
                >
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  font-size: 4.5rem;
  color: #f9a61a;
  text-align: center;
  text-decoration: underline;
`;
const Backdrop = styled.div`
  height: 110vh;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  // position: sticky;
  position: absolute;
  top: 0;
  height: 110vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #01597d;
  font-size: 3rem;
  font-weight: 500;
  padding: 0.5rem;
`;
