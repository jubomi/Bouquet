import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const SignUp = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const submitButtonRef = useRef();

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    changeButtonColor();
  }, [id, email, pw]);

  const changeButtonColor = () => {
    if (id !== "" && email !== "" && pw !== "") {
      submitButtonRef.current.style.backgroundColor = "#fc8da7";
    } else {
      submitButtonRef.current.style.backgroundColor = "#d9d9d9";
    }
  };

  return (
    <Fragment>
      <Background />
      <Flex>
        <LoginBox>
          <Flex>
            <p className="SIGNUP">회원가입</p>
          </Flex>
          <AuthInput
            id="id"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={onIdChange}
          />
          <AuthInput
            id="email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onEmailChange}
          />
          <AuthInput
            id="password"
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={onPwChange}
          />
          <AuthButton ref={submitButtonRef}>회원가입</AuthButton>
          <p className="haveID">이미 아이디가 있으신가요?</p>
          <Link to="/login">
            <GoLogin>로그인 하기</GoLogin>
          </Link>
        </LoginBox>
        <CopyRight>© 2022. 할미꽃 All rights reserved.</CopyRight>
      </Flex>
    </Fragment>
  );
};

const GoLogin = styled.div`
  margin-top: -10px;
  font-size: 10pt;
  color: #fc8da7;
  text-decoration: underline;
`;

const AuthButton = styled.button`
  margin-top: 40px;
  width: 400px;
  height: 45px;
  border: none;
  border-radius: 40px;
  background-color: #d9d9d9;
  /* background-color: #fc8da7;    인풋박스에 글자가 써질 때 버튼에 색 넣기*/
  font-size: 12pt;
  color: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const AuthInput = styled.input`
  width: 380px;
  height: 45px;
  padding-left: 30px;
  border-radius: 50px;
  background-color: #f8f8f8;
  margin-top: 15px;
  border: none;
  outline: none;
  ::placeholder {
    font-family: "Noto Sans KR";
    font-size: 10pt;
    font-weight: 550;
    color: #c1c3ca;
  }
`;

const CopyRight = styled.div`
  margin-top: 765px;
  text-align: center;
  color: #9e9e9e;
  font-size: 5pt;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
  width: 530px;
  height: 450px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  .SIGNUP {
    margin-top: 40px;
    font-size: 22pt;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #e29393;
  }
  .haveID {
    margin-top: 20px;
    font-size: 10pt;
    color: #9e9e9e;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default SignUp;
