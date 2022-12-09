import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const My = () => {
  return (
    <Wrapper>
      <Header>
        <Background />
        <InputWrapper>
          <Flex>
            <p className="second">님의 꽃다발을 채워주세요</p>
          </Flex>
          <Flex>
            <EmptyBouquet
              src="./assets/images/emptyBouquet.svg"
              alt="emptyBouquet"
            />
          </Flex>
        </InputWrapper>
        <Flex>
          <Link to="/giveFlower">
            <GiftFlowerButton>꾸미러 가기</GiftFlowerButton>
          </Link>
        </Flex>
        <CopyRight>© 2022. 할미꽃 All rights reserved.</CopyRight>
      </Header>
    </Wrapper>
  );
};

const CopyRight = styled.div`
  margin-top: 35.5px;
  text-align: center;
  color: #9e9e9e;
  font-size: 5pt;
`;

const GiftFlowerButton = styled.button`
  margin-top: 45px;
  width: 270px;
  height: 50px;
  border: none;
  border-radius: 40px;
  background-color: #fc8da7;
  font-size: 12pt;
  color: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
  width: 100%;
  height: 6vh;
  background: #f6f3f4;
  position: fixed;
  .makeMyBouquet {
    margin-top: 23px;
    text-align: center;
    font-style: normal;
    font-size: 9pt;
    color: #c1c3ca;
    font-weight: 500;
    text-decoration-line: underline;
  }
`;

const EmptyBouquet = styled.img`
  margin-top: 10px;
  width: 300px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  .first {
    flex-direction: row-reverse;
    padding: 0%;
    font-size: 18pt;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-right: 6px;
    color: #fb9cb3;
  }
  .second {
    flex-direction: row-reverse;
    padding: 0%;
    font-size: 18pt;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #7b676c;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default My;
