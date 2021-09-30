import React, { useState, ChangeEvent } from "react";
import { Wrapper, HomeWrapper } from "../styles/Home.style";
import CountryInfoCard from "../ui/molecules/CountryInfoCard";
import Spinner from "../ui/molecules/Spinner";
import { InputWrapper, Input } from "../styles/Input.style";
import useFetch from "../../hooks/useFetch";
import Dialog from "../ui/molecules/Dialog";
import { motion } from "framer-motion";
import { cardTransition, transit } from "../../utils/animate";
import Navbar from "../ui/molecules/Nav";
import Logo from "../assets/logo.svg";

interface COUNTRY {
  name: string;
  currency: string;
  emoji: string;
  population: number;
  currencyName: string;
  phone: string;
  currencyToSEK: number;
}


const Home: React.FC = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({} as COUNTRY[]);
  const { getFetch } = useFetch("GET");
  const [open, setOpen] = useState(false);
  const [singleCountry, setSingleCountry] = useState({} as COUNTRY);

  const token = localStorage.getItem("countryLookUpToken") as string;

  const handleModal = () => {
    setOpen(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setCountry({} as COUNTRY[]);
    }
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCountry({} as COUNTRY[]);
      setIsLoading(true);
      const countryDetailsArr = [] as COUNTRY[];
      const url = `https://country-lookup-server.herokuapp.com/api/v1/country/${value}`;

      const data = await getFetch(url, token);

      let countryDetails = {} as COUNTRY;

      console.log(data.payload);
      data.payload.forEach((country: Record<string, any>) => {
        countryDetails = { ...(country as COUNTRY) };
        countryDetailsArr.push(countryDetails);
      });

      setCountry(countryDetailsArr);
      setValue("");
      setIsLoading(false);
    }
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={cardTransition}
      transition={transit}
    >
      <Navbar />
      <HomeWrapper>
        <img src={Logo} alt="logo" />
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
          {country.length > 0 &&
            country.map((c, i) => (
             
                <CountryInfoCard
                  countryDetails={c}
                  onClick={() => {
                    setSingleCountry(c);
                    handleModal();
                  }}
                  key={`${c.phone + i}`}
                />
            ))}
          {country.length === 0 && <h2>Oops! No Results :( </h2>}
        </Wrapper>
      </HomeWrapper>
      <Dialog
        open={open}
        close={handleClose}
        countryDetail={singleCountry}
      ></Dialog>
    </motion.div>
  );
};

export default Home;
