import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from 'react-router-dom'
import { LoginCard } from "../../styles/LoginCard.style";
import { Button } from "../../styles/Button.style";
import useFetch from "../../../hooks/useFetch";
import { setUserToken } from "../../../utils/setUserToken";
import Logo from '../../assets/logo.svg'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { postFetch } = useFetch("POST");
  const history = useHistory();


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
   
  const url = "https://country-lookup-server.herokuapp.com/api/v1/auth/login";

  try {
    const res = await postFetch(url, { email });
    setUserToken(res.token);
    history.replace('/home')
  } catch (err: any) {
    console.log(err.message);
    // setError(err.message);
  }
  };
  return (
    <LoginCard>
      <img src={Logo} alt="logo" style={{ width: "30px"}} />
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="enter email"
          value={email}
          onChange={handleChange}
        />
        <Button disabled={isLoading}>{isLoading ? 'Please wait..' : 'Login'}</Button>
      </form>
    </LoginCard>
  );
};

export default SignIn;
