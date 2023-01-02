import React, { Fragment, useState, useEffect, setContent } from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Background from "../background/Background";

const ChooseFlower = () => {
  //   const flowers = [
  //     "blueStar",
  //     "sunFlower",
  //     "pinkFlower",
  //     "cosmos",
  //     "lavenderFlower",
  //     "tulip",
  //   ];
  //   const flowerList = flowers.map((flower, item) => {
  //     console.log(flower);
  //   });

  const onChooseFlower = (e) => {
    console.log(`clicked, ${e}`);
  };

  return (
    <Fragment>
      <Background />
      <Flex>
        <p className="choose">님에게 선물할 꽃을 선택하세요</p>
      </Flex>
      <ImgBox>
        <Flex>
          <Link to="/letter">
            <img
              onClick={() => onChooseFlower("blueStar")}
              className="blueStar"
              src="./assets/images/blueStar.svg"
              alt="blueStar"
            />
            <img
              onClick={() => onChooseFlower("sunFlower")}
              className="sunFlower"
              src="./assets/images/sunFlower.svg"
              alt="sunFlower"
            />
            <img
              onClick={() => onChooseFlower("pinkFlower")}
              className="pinkFlower"
              src="./assets/images/pinkFlower.svg"
              alt="pinkFlower"
            />
          </Link>
        </Flex>
        <Flex>
          <img
            onClick={() => onChooseFlower("cosmos")}
            className="cosmos"
            src="./assets/images/cosmos.svg"
            alt="cosmos"
          />
          <img
            onClick={() => onChooseFlower("lavenderFlower")}
            className="lavenderFlower"
            src="./assets/images/lavenderFlower.svg"
            alt="lavenderFlower"
          />
          <img
            onClick={() => onChooseFlower("tulip")}
            className="tulip"
            src="./assets/images/tulip.svg"
            alt="tulip"
          />
        </Flex>
      </ImgBox>
    </Fragment>
  );
};

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
  gap: 50px;

  .blueStar,
  .sunFlower {
    margin-right: 80px;
    width: 120px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }
  .pinkFlower {
    width: 120px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }
  .cosmos,
  .lavenderFlower {
    margin-right: 80px;
    width: 130px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  .tulip {
    transform: rotate(-20deg);
    width: 130px;
    object-fit: contain;
    display: inline-block;
    vertical-align: middle;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }
  .blueStar:hover,
  .blueStar:focus,
  .blueStar:active,
  .sunFlower:hover,
  .sunFlower:focus,
  .sunFlower:active,
  .pinkFlower:hover,
  .pinkFlower:focus,
  .pinkFlower:active,
  .cosmos:hover,
  .cosmos:focus,
  .cosmos:active,
  .lavenderFlower:hover,
  .lavenderFlower:focus,
  .lavenderFlower:active,
  .tulip:hover,
  .tulip:focus,
  .tulip:active {
    transform: scale(1.5);
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  .choose {
    font-size: 17pt;
    font-family: "Noto Sans KR";
    font-weight: 550;
    margin-top: 130px;
    color: #7b676c;
  }
`;

export default ChooseFlower;
