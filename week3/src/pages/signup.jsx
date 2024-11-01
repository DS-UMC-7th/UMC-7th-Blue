import {useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';


const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
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
  background-color: #ea345c;
  width: 20vw;
  height: 5vh;
  border: 0;
  padding: 0;
  border-radius: 10px;
  color: white;
`;

const Signup = () => {

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하여야 합니다.')
      .required(),
    pwcheck: yup
      .string()
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 검증 또한 필수 입력요소입니다.'),
  })

  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return(
    <>
      <SignupContainer>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            type='email' 
            placeholder='이메일을 입력해주세요!' 
            {...register('email')}
            onBlur={() => trigger('email')}
          />
          <Error>{errors.email?.message}</Error>
          <Input 
            type='password' 
            placeholder='비밀번호를 입력해주세요!' 
            {...register('password')}
            onBlur={() => trigger('password')}
          />
          <Error>{errors.password?.message}</Error>
          <Input 
            type='password' 
            placeholder='비밀번호를 다시 입력해주세요!' 
            {...register('pwcheck')}
            onBlur={() => trigger('pwcheck')}
          />
          <Error>{errors.pwcheck?.message}</Error>
          <Button 
            type='submit'
            >제출</Button>
        </form>
      </SignupContainer>
    </>
  );
}

export default Signup;