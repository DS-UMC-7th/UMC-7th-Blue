import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  height: 100%;
  width: 200px;  /* 고정된 너비 설정 */
  flex-shrink: 0; /* 사이드바가 축소되지 않도록 설정 */
  background-color: #131517;
`;

const OutletContainer = styled.div`
  flex-grow: 1;
  background-color: black;
  color: white;
  overflow-y: auto;

  &:: -webkit-scrollbar {
  display: none;
}
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
