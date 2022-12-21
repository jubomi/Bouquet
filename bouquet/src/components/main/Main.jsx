import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const Main = () => {
  return (
    <Wrapper>
      <Header>
        <Background />
        <InputWrapper>
          <Flex>
            <p className="first">꽃다발을</p>
            <p className="second">예쁘게 장식해주세요</p>
          </Flex>
          <Flex>
            <Bouquet src="./assets/images/bouquet.svg" alt="bouquet" />
          </Flex>
        </InputWrapper>
        <Flex>
          <Link to="/login">
            <GiftFlowerButton>내 꽃다발 만들러 가기</GiftFlowerButton>
          </Link>
        </Flex>
      </Header>
    </Wrapper>
  );
};

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
`;

const Bouquet = styled.img`
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

export default Main;

// const bubbles = () => {
//   const bubbleSize = [
//     {
//       bubbleWH: 700,
//       bubbleLeftMargin: -280,
//       bubbleTopMargin: 400
//     },
//     {
//       bubbleWH: 500,
//       bubbleLeftMargin: -400,
//       bubbleTopMargin: 200,
//     },
//     {
//       bubbleWH: 200,
//       bubbleLeftMargin: -400,
//       bubbleTopMargin: 200,
//     },
//     {
//       bubbleWH: 700,
//       bubbleLeftMargin: 400,
//       bubbleTopMargin: 200,
//     },
//     {
//       bubbleWH: 900,
//       bubbleLeftMargin: 200,
//       bubbleTopMargin: 200,
//     }
//   ];
// }

// const bubble = [700, 500, 200, 700, 900];
// const listItems = bubble.map((bubble, idx) => {
//   console.log(bubble);
// });
