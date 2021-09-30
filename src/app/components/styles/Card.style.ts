import styled from "styled-components";

export const Card = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 320px;
  background: #ffffff;
  margin-top: 10px;
  position: relative;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  padding: 5px;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

  &:hover {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.26);
  }

  & input {
    border: 2px solid #f7f7f7;
    padding: 15px;
    outline: none;
    font-size: 1rem;
    border-radius: 4px;
    &:focus {
      border: 1px solid #5ae4ca;
    }
  }

  & .currency-converter {
    display: flex;
    width: auto;
    justify-content: space-between;
  }

  & .inputs {
    display: flex;
    flex-direction: column;
    width: 45%;
    padding: 5px;
  }

  & header {
    border-bottom: 1px solid #f0f0f0;
  }
  & .card-body {
    border-bottom: 1px solid #f0f0f0;
    text-align: left;
    & .flex {
      display: flex;
      justify-content: space-between;
    
    
  
      & li {
        list-style: none;
        border: 1px solid #f0f0f0;
        font-size: 0.8rem;
        margin-right: 2px;
        padding: 2px;
        border-radius: 30px;
        margin-bottom: 1px;
      }
    }
  }


  @media screen and (min-width: 930px) {
    width: 310px;
    
    & li {
      display: inline;
    }

  }
`;
