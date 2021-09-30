import styled from "styled-components";

export const LoginCard = styled.div`
  box-sizing: border-box;
  width: calc(50% + 100px);
  height: 320px;
  background: #ffffff;
  position: relative;
  /* border: 1px solid #5ae4ca; */
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  padding: 5px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  
  & img {
    margin: 5px auto;
  }

  & input {
    border: 2px solid #f7f7f7;
    padding: 15px;
    outline: none;
    font-size: 1rem;
    border-radius: 4px;
    display: block;
    width: 75%;
    margin: 50px auto;
    &:focus {
        background-color: #f6faf9
    }
  }
/* 
  & button {
    position: absolute;
    bottom: 10px;
    width: 80%;
    height: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: #5ae4ca;
    border: none;
    outline: none;
    cursor: pointer
  } */



  @media screen and (min-width: 930px) {
    width: calc(40% + 50px);
  }
`;
