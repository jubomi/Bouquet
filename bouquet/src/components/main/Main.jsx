import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const Main = () => {
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
            <Link to="/login">
              <p className="login">로그인</p>
            </Link>
            <Link to="/signUp">
              <p className="signUp">회원가입</p>
            </Link>
          </Flex>
        </HeaderText>
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
          <Link to="/giveFlower">
            <GiftFlowerButton>꽃 선물하러 가기</GiftFlowerButton>
          </Link>
        </Flex>
        <Link to="/login">
          <p className="makeMyBouquet">내 꽃다발 만들러 가기</p>
        </Link>
      </Header>
    </Wrapper>
  );
};

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
  margin-top: 40px;
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
