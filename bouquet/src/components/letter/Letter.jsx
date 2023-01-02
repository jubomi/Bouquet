import React, { Fragment, useState, useEffect, setContent } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const Letter = () => {
  return (
    <Fragment>
      <Background />
      <Flex>
        <p className="headerText">님에게 보낼 메세지를 입력해주세요</p>
      </Flex>
      <LetterBox>
        <Letters
          className="letterNameBox"
          placeholder="닉네임을 입력해주세요"
        />
      </LetterBox>
    </Fragment>
  );
};

const LetterBox = styled.div`
  display: flex;
  justify-content: center;
  .letterNameBox {
    margin-top: 80px;
    width: 500px;
    height: 45px;
    border: none;
    border-radius: 40px;
    background-color: #fff1f6;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
    padding-left: 30px;
    padding-top: 3px;
    outline: none;
  }
  ::placeholder {
    font-size: 12pt;
    color: #c1c3ca;
  }
`;

const Letters = styled.input`
  margin-top: 80px;
  width: 500px;
  height: 45px;
  border: none;
  border-radius: 40px;
  background-color: #fff1f6;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  padding-left: 30px;
  padding-top: 3px;
  outline: none;
  ::placeholder {
    font-size: 12pt;
    color: #c1c3ca;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  .headerText {
    margin-top: 130px;
    font-size: 15pt;
    font-family: "Noto Sans KR";
    font-weight: 550;
    color: #7b676c;
  }
`;

export default Letter;
