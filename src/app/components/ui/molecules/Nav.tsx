import { Wrapper, Navbar, NavButton } from "../../styles/Nav.style";

import logo from "../../assets/logo.svg";
const NavBar = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Navbar>
      <Wrapper>
        <img src={logo} alt="" style={{ width: "20px", fill: 'red' }} />
        <h2>Country look up</h2>
      </Wrapper>
      <NavButton onClick={handleClick}>Logout</NavButton>
    </Navbar>
  );
};
export default NavBar;
