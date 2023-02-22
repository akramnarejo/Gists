import React from "react";
import Gist from "./Gist";
import { useAppState } from "../context";
import styled from "styled-components";
import Octicon from "react-octicon";
const GistList = () => {
  const { gists, error, loading } = useAppState();

  return (
    <Wrapper>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : loading ? (
        <Info>
          <Octicon name="sync" mega spin />
          <InfoMessage>Fetching Gists...</InfoMessage>
        </Info>
      ) : (
        gists?.map((gist, index) => {
          return <Gist key={index} gist={gist} />;
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  margin: auto;
`;
const ErrorMessage = styled.p`
  font-size: 30px;
  margin-top: 30px;
  color: black;
`;
const Info = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 5px;
  align-items: center;
`;
const InfoMessage = styled.p`
  font-size: 30px;
`;
export default GistList;
