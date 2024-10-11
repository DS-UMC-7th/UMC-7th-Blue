import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    background-color: #131517;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
`;

const HomeContainer = styled.div`
    flex-grow: 1;
`;

const LoginContainer = styled.div`
    flex-shrink: 0;
`;

const HomeLink = styled(Link)`
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 500;
    color: #ea345c;
`;
const LoginLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-right: 20px;

    &:hover {
        color: yellow;
    }
`;
const BtnLink = styled(Link)`
    text-decoration: none;
    color: white;
    background-color: #ea345c;
    border-radius: 10px;
    padding: 5px;

    &:hover {
        color: black;
    }
`;

const Navbar = () => {
    return (
        <NavContainer>
            <HomeContainer>
                <HomeLink to={'/'}>WATCHA</HomeLink>
            </HomeContainer>

            <LoginContainer>
                <LoginLink to='/login'>로그인</LoginLink>
                <BtnLink to='/signup'>회원가입</BtnLink>
            </LoginContainer>
        </NavContainer>
    );
};

export default Navbar;
