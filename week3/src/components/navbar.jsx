import axios from "axios";
import { useEffect, useState } from "react";
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

    span {
        color: white;
        margin: auto 10px;
        font-weight: bold;
    }
`;

const HomeLink = styled(Link)`
    text-decoration: none;
    font-size: 1.8em;
    font-weight: 500;
    color: #ea345c;
`;

const LogoutBtn = styled.button`
    background: transparent;
    color: white;
    border: none;
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

    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const accessToken = localStorage.getItem("accessToken");
            
            if (accessToken) {
                try {
                    const response = await axios.get('http://localhost:3000/user/me', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })
                    console.log("유저 정보: ",response.data);
                    setUser((response.data.email).split('@')[0]);
                } catch(error) {
                    console.error("유저 정보 가져오기 실패:", error);
                }
            }
        }
        getUser();
    }, [])

    return (
        <NavContainer>
            <HomeContainer>
                <HomeLink to={'/'}>WATCHA</HomeLink>
            </HomeContainer>

            <LoginContainer>
                {user ? (
                    <>
                        <span>{user}님 환영합니다</span>
                        <LogoutBtn
                            onClick={() => {
                                localStorage.removeItem("accessToken");
                                localStorage.removeItem("refreshToken");
                                setUser(null);
                            }}
                        >로그아웃</LogoutBtn>
                    </>
                ) : (
                    <>
                        <LoginLink to='/login'>로그인</LoginLink>
                        <BtnLink to='/signup'>회원가입</BtnLink>
                    </>
                )}
            </LoginContainer>
        </NavContainer>
    );
};

export default Navbar;
