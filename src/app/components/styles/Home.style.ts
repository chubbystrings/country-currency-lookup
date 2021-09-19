import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;

  & h1 {
    font-size: 25px;
    @media screen and (min-width: 930px) {
      font-size: 40px;
    }
  }

  & .btn {
    position: absolute;
    top: 40px;
    width: 100px;
    height: 50px;
    left: 50%;
    margin-left: -50px;
    margin-top: 10px;
    background-color: #5ae4ca;
    border: none;
    outline: none;
    cursor: pointer;

    @media screen and (min-width: 930px) {
      margin-left: 0px;
      margin-top: 0px;
      top: 25px;
      left: 87%
    }
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;

  @media screen and (min-width: 930px) {
    justify-content: space-between;
  }
`;
