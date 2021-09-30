import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;

  & h1 {
    font-size: 21px;
    font-weight: 1000;
    text-align: left;
    margin-left: 15px;
    margin-top: 20px;

    @media screen and (min-width: 930px) {
      font-size: 40px;
    }

    @media screen and (min-width: 745px) {
      text-align: center;
    }
  }

  & .btn {
    position: absolute;
    width: 100px;
    height: 35px;
    right: 2%;
    top: -2px;
    background-color: #5ae4ca;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: #c1e9e1;
    }

    @media screen and (min-width: 930px) {
      height: 50px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;

  & h2 {
    margin: 0 auto;
  }

  @media screen and (min-width: 930px) {
    justify-content: space-between;
  }
`;
