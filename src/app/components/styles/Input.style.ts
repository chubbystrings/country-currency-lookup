import styled from "styled-components";


export const InputWrapper = styled.div`
 position: relative;
 margin-top: 60px;

`

export const Input = styled.input`
  height: 55px;
  width: calc(75% - 150px);
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 930px) {
    width: calc(70% - 100px);
  }
`;
