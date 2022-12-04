import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Logo from "../../../public/assets/images/b_logo.svg";


const Background = () => {
  return (
    <Wrapper>
      <Bubble />
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <Bubble4 />
      <Header>
        <HeaderText>
          <Flex>
            <Link to="/main">
              <B_Logo src="./assets/images/b_logo.svg" />
              </Link>
            <Link to="/login">
              <p className="login">로그인</p>
            </Link>
            <Link to="/signUp">
              <p className="signUp">회원가입</p>
            </Link>
          </Flex>
        </HeaderText>
      </Header>
    </Wrapper>
  );
};

const B_Logo = styled.div`
  margin-left: -1250px;
  background-color: white;
  width: 50px;
  object-fit: contain;
  `;

const Bubble = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  left: -280px;
  top: 400px;
  border-radius: 50%;
  background: rgba(215, 97, 153, 0.03);
  position: fixed; // 스크롤 없애고 요소 고정
`;

const Bubble1 = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  left: -180px;
  top: 160px;
  border-radius: 50%;
  background: rgba(215, 97, 153, 0.03);
  position: fixed; // 스크롤 없애고 요소 고정
`;

const Bubble2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  left: 200px;
  top: 280px;
  border-radius: 50%;
  background: rgba(215, 97, 153, 0.03);
  position: fixed; // 스크롤 없애고 요소 고정
`;

const Bubble3 = styled.div`
  position: absolute;
  width: 850px;
  height: 850px;
  left: 900px;
  top: 330px;
  border-radius: 50%;
  background: rgba(215, 97, 153, 0.03);
  position: fixed; // 스크롤 없애고 요소 고정
`;

const Bubble4 = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  left: 1130px;
  top: 80px;
  border-radius: 50%;
  background: rgba(215, 97, 153, 0.03);
  position: fixed; // 스크롤 없애고 요소 고정
`;

const HeaderText = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 50px;
  letter-spacing: 0.5px;
  .login {
    color: #e29393;
    text-decoration: none;
  }
  .signUp {
    margin-left: 30px;
    color: #e29393;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 6vh;
  background: #f6f3f4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default Background;
