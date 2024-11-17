import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;

  h1 {
    margin: 5vh auto;
  }
`;

const Input = styled.input`
  width: 20vw;
  height: 5vh;
  border: 0;
  padding: 0;
  padding-left: 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Error = styled.p`
  color: red;
`;

const Button = styled.button`
  // background-color: ${({ isValid }) => (isValid ? '#ea345c' : '#d3d3d3')};
  background-color: #ea345c;
  color: white;
  width: 20vw;
  height: 5vh;
  border: 0;
  padding: 0;
  border-radius: 10px;

  //   &:disabled {
  //   background-color: #d3d3d3;
  // }
`;

const Login = () => {

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 8 ~ 16자 사이로 입력해주세요!')
      .max(16, '비밀번호는 8 ~ 16자 사이로 입력해주세요!')
      .required(),
  })

  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
  // const { register, handleSubmit, formState: { errors, isValid }, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const onSubmit = async (data) => {
    try{
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: data.email,
        password: data.password,
      });
      console.log("로그인 성공", response.data);
      const { accessToken, refreshToken } = response.data;
      if (response.status === 201) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      }
      navigate("/");

    } catch (error) {
      console.log("로그인 실패", error)
    }
  }

  return(
    <LoginContainer>
      <h1>로그인</h1>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            type="email" 
            placeholder="이메일을 입력해주세요!"
            {...register('email')} 
            onBlur={() => trigger('email')}
          />
          <Error>{errors.email?.message}</Error>
          <Input 
            type="password" 
            placeholder="비밀번호를 입력해주세요!"
            {...register('password')} 
            onBlur={() => trigger('password')}
          />
          <Error>{errors.password?.message}</Error>
          <Button 
            type="submit" 
            // isValid={isValid}
            // disabled={!isValid}
            >로그인</Button>
        </form>
      </>
    </LoginContainer>
  );
}

export default Login;