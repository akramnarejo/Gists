import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";

function Header() {
  return (
    <Wrapper>
      <HeaderDiv>
        <Octicon name="mark-github" mega />
        <Search />
      </HeaderDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  padding: 16px;
`;
const HeaderDiv = styled.div`
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 800px;
  margin: auto;
`;

export default Header;
