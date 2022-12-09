import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../background/Background";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const submitButtonRef = useRef();

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    changeButtonColor();
  }, [id, pw]);

  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  const changeButtonColor = () => {
    if (id !== "" && pw !== "") {
      submitButtonRef.current.style.backgroundColor = "#fc8da7";
    } else {
      submitButtonRef.current.style.backgroundColor = "#d9d9d9";
    }
  };

  return (
    <Fragment>
      <Background />
      <Wrapper>
        <Flex>
          <LoginBox>
            <Flex>
              <p className="LOGIN">로그인</p>
            </Flex>
            <AuthInput
              id="id"
              type="text"
              placeholder="아이디"
              value={id}
              onChange={onIdChange}
            />
            <AuthInput
              id="pw"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={onPwChange}
            />
            <AuthButton ref={submitButtonRef}>로그인</AuthButton>
            <p className="NoID">아이디가 없으신가요?</p>
            <Link to="/signUp">
              <GoSignUp>회원가입 하기</GoSignUp>
            </Link>
          </LoginBox>
          <CopyRight>© 2022. 할미꽃 All rights reserved.</CopyRight>
        </Flex>
      </Wrapper>
    </Fragment>
  );
};

const GoSignUp = styled.div`
  font-size: 10pt;
  text-decoration: underline;
  color: #FC8DA7;
  margin-top: -10px;
`;

const AuthButton = styled.button`
  margin-top: 40px;
  width: 400px;
  height: 50px;
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
  height: 50px;
  padding-left: 30px;
  border-radius: 50px;
  background-color: #f8f8f8;
  margin-top: 20px;
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
  .LOGIN {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 22pt;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #e29393;
  }
  .NoID {
    margin-top: 35px;
    font-size: 10pt;
    color: #9E9E9E;
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

export default Login;
