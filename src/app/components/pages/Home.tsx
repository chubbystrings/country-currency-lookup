import React, { useState, ChangeEvent } from "react";
import { Wrapper, HomeWrapper } from "../styles/Home.style";
import CountryInfoCard from "../ui/molecules/CountryInfoCard";
import Spinner from "../ui/molecules/Spinner";
import { InputWrapper, Input } from "../styles/Input.style";
import useFetch from "../../hooks/useFetch";

interface COUNTRY {
  name: string;
  code: string;
  symbol: string;
  population: number;
  currencyName: string;
}

const Home: React.FC = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({} as COUNTRY[]);
  const { getFetch } = useFetch("GET");

  const token = localStorage.getItem("countryLookUpToken") as string;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      const url = `https://country-lookup-server.herokuapp.com/api/v1/country/${value}`;

      const data = await getFetch(url, token);

      // const countryDetails = {} as COUNTRY;
      // const countryDetailsArr = [] as COUNTRY[]
      // data.payload.forEach((country: Record<string, any>) => {
      //   countryDetails.name = country.name;
      //   countryDetails.code = country.currencies[0].code;
      //   countryDetails.symbol = country.currencies[0].symbol;
      //   countryDetails.population = country.population;
      //   countryDetails.currencyName = country.currencies[0].name;
      //   countryDetailsArr.push(countryDetails)
      // });
      // console.log(countryDetails);
      // setCountry(countryDetailsArr);
      // setValue("");
      // setIsLoading(false);
      console.log(data)
    }
  };
  return (
    <HomeWrapper>
      <h1>Country Look up</h1>
      <button className="btn" onClick={handleClick}>
        Logout
      </button>
      <InputWrapper>
        {isLoading && <Spinner width="10" height="10" />}
        <Input
          placeholder="type country, press enter"
          value={value}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
      </InputWrapper>
      <Wrapper>
        { country.length > 0 && country.map((c) => <CountryInfoCard key={`${c.name}${c.population}`} />)}
      </Wrapper>
    </HomeWrapper>
  );
};

export default Home;
