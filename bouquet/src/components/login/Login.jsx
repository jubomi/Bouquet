import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const Login = () => {
  return (
    <Fragment>
      <Background />
      <Wrapper>
        <Flex>
          <LoginBox>
            <Flex>
              <p className="LOGIN">로그인</p>
            </Flex>
            <AuthInput id="id" type="text" placeholder="아이디" />
            <AuthInput id="pw" type="password" placeholder="비밀번호" />
            <AuthButton>로그인</AuthButton>
          </LoginBox>
          <CopyRight>© 2022. 할미꽃 All rights reserved.</CopyRight>
        </Flex>
      </Wrapper>
    </Fragment>
  );
};

const AuthButton = styled.button`
  margin-top: 70px;
  width: 400px;
  height: 55px;
  border: none;
  border-radius: 40px;
  background-color: #D9D9D9;
  /* background-color: #fc8da7;    인풋박스에 글자가 써질 때 버튼에 색 넣기*/
  font-size: 12pt;
  color: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const AuthInput = styled.input`
  width: 380px;
  height: 45px;
  padding: 5px 0px 5px 30px;
  border-radius: 50px;
  background-color: #f8f8f8;
  margin-top: 30px;
  border: none;
  outline: none;
  ::placeholder {
    font-family: "Noto Sans KR";
    font-size: 12pt;
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
  margin-top: 145px;
  width: 590px;
  height: 520px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  .LOGIN {
    margin-top: 50px;
    margin-bottom: 40px;
    font-size: 22pt;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #e29393;
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
