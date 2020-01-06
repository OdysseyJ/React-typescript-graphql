import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../common/styleUtils";

const styles = {
  Image: {
    height: 60,
    width: "auto",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center"
  }
};

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)};
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;

// 로고
const Logo = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${oc.blue[6]};
  font-family: "Rajdhani";
`;

const Img = styled.img`
  height: 60px;
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

const Header = ({ children }: any) => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <img
            src={process.env.PUBLIC_URL + "/images/headerImage.png"}
            style={styles.Image}
          ></img>
          <Spacer />
          {children}
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
};

export default Header;
