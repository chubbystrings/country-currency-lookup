import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 25%;
  left: 18%;
  width: calc(55% + 50px);
  z-index: 1000;
  border-radius: 12px;
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #fff;
  transform: ${(props: { visible: boolean }) =>
    props.visible ? "scale(1)" : "scale(0.0)"};
  transition: transform 300ms;
  & h2 {
    font-size: 20px;
  }

  & button {
    position: absolute;
    right: 2px;
    top: 2px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
    padding: 10px;
  }

  & input {
    border: 2px solid #f7f7f7;
    padding: 15px;
    outline: none;
    font-size: 1rem;
    border-radius: 4px;
  }

  & .currency-converter {
    display: flex;
    width: auto;
    justify-content: space-between;
    margin: 20px;
  }

  & .inputs {
    display: flex;
    flex-direction: column;
    width: 45%;
    padding: 5px;

    & #others {
      background-color: #f6faf9;
    }
  }

  @media screen and (min-width: 930px) {
    width: calc(40% + 65px);
    left: 28%;
  }

  & .dialog--open {
    background-color: black;
    animation: dialog-open 0.3s ease-in;
  }
  & .dialog--close {
    animation: dialog-close 0.5s ease-out;
  }

  & .dialog-unscale {
    visibility: hidden;
    transform: scale(0.1);
    transition: transform 200ms;
  }
  & .dialog-scale {
    visibility: visible;
    transform: scale(1);
    transition: transform 200ms;
  }

  @keyframes dialog-open {
    from {
      transform: scale(0.1);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes dialog-close {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(0.1);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 10;
`;