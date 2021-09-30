import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  height: 50px;
  width: calc(95% - 100px);
  /* border: 1px solid #5ae4ca; */
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);

  &:focus {
    /* border: 2px solid #5ae4ca; */
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
    background-color: #f6faf9;
  }

  @media screen and (min-width: 745px) {
    width: calc(90% - 250px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(85% - 300px);
  }
`;
