import React, { Fragment, useState, useEffect, setContent } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const Letter = () => {
  const [nick, setNick] = useState("");
  const [letter, setLetter] = useState("");
  const submitButtonRef = useRef();

  const onNickChange = (e) => {
    setNick(e.target.value);
  };

  useEffect(() => {
    changeButtonColor();
  }, [nick, letter]);

  const onLetterChange = (e) => {
    setLetter(e.target.value);
  };

  const changeButtonColor = () => {
    if (nick !== "" && letter !== "") {
      submitButtonRef.current.style.backgroundColor = "#fc8da7";
    } else {
      submitButtonRef.current.style.backgroundColor = "#d9d9d9";
    }
  };

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
          onChange={onNickChange}
        />
        <Letters
          className="letterBox"
          placeholder="메시지를 입력해주세요"
          onChange={onLetterChange}
        />
        <NextButton ref={submitButtonRef}>다음으로</NextButton>
      </LetterBox>
    </Fragment>
  );
};

const NextButton = styled.button`
  margin-top: 40px;
  width: 620px;
  height: 50px;
  border: none;
  border-radius: 40px;
  background-color: #d9d9d9;
  /* background-color: #fc8da7;    인풋박스에 글자가 써질 때 버튼에 색 넣기*/
  font-size: 12pt;
  color: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const LetterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .letterNameBox {
    margin-top: 80px;
    width: 600px;
    height: 50px;
    border: none;
    border-radius: 40px;
    background-color: #fff1f6;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
    padding-left: 30px;
    padding-top: 3px;
    outline: none;
  }
  .letterBox {
    margin-top: 20px;
    width: 600px;
    height: 300px;
    border: none;
    border-radius: 40px;
    background-color: #ffffff;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
    padding-left: 30px;
    padding-top: 3px;
    outline: none;
    z-index: 1;
  }
  input::placeholder {
    font-size: 10pt;
    color: #c1c3ca;
  }
`;

const Letters = styled.input``;

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
