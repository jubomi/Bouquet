import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const ChooseFlower = () => {
  return (
    <Fragment>
      <Background />
      <Flex>
        <p className="choose">님에게 선물할 꽃을 골라주세요</p>
      </Flex>
    </Fragment>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: center;
  .choose {
    font-size: 17pt;
    font-family: "Noto Sans KR";
    font-weight: 550;
    margin-top: 130px;
    color: #7B676C;
  };
`;

export default ChooseFlower;
