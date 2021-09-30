import styled from "styled-components";

export const Navbar = styled.nav`
width: 100%;
background-color: transparent;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
& h2 {
    display: none;
    font-size: 25px;
}

@media screen and (min-width: 425px) {
    & h2 {
        display: block;
    }
}
`
export const Wrapper = styled.div`
display: flex;
gap: 5px;
align-items: center;
margin-left: 20px;
`

export const NavButton = styled.button`
    width: 100px;
    height: 35px;
    background-color: #5ae4ca;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      background-color: #c1e9e1;
    }

`