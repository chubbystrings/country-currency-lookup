import styled from "styled-components";

interface Props {
    position?: boolean;
    disabled?: boolean;
    
}

export const Button = styled.button`
    position: ${(props: Props) => props.position ? 'absolute' : 'relative'};
    bottom: 10px;
    width: 80%;
    height: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props: Props) => props.disabled ? '#c1e9e1' :  '#5ae4ca'};
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: #c1e9e1;
    }

`