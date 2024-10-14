import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  flex-basis: 300px;
  height: 100%;
`;

const OutletContainer = styled.div`
  flex-grow: 1;
  background-color: black;
  color: white;
  height: 100%;
`;

const RootLayout = () => {
    return (
        <>
          <Navbar/>
          <LayoutContainer>
            <SidebarContainer>
              <Sidebar/>
            </SidebarContainer>
            <OutletContainer>
            <Outlet/>
            </OutletContainer>
          </LayoutContainer>
        </>
    );
};

export default RootLayout;
