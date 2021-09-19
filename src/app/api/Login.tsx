import  { useState } from "react";
import useFetch from "../hooks/useFetch";

const Login = async (email: string) => {
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const { postFetch } = useFetch("POST");
  const url = "https://country-lookup-server.herokuapp.com/api/v1/auth/login";

  try {
    const res = await postFetch(url, { email });
    setToken(res.token);
  } catch (err: any) {
    console.log(err.message);
    setError(err.message);
  }

  return { error, token };
};

export default Login;
