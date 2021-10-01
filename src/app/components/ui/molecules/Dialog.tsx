/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from "react";
import { Modal, Overlay, ConvertSpinner } from "../../styles/Dialog.style";
import { DotLoader } from "../../styles/Spinner.style";
import useFetch from "../../../hooks/useFetch";
import { getUserToken } from "../../../utils/setUserToken";

interface Props {
  open: boolean;
  close: () => void;

  countryDetail: {
    name: string;
    currency: string;
    emoji: string;
    currencyToSEK: number;
  };
}

interface CACHE {
  [propsName: string]: {
    convert: number;
  };
}

const Dialog: React.FC<Props> = ({ countryDetail, open, close }) => {
  const { postFetch } = useFetch("POST");
  let { currency } = countryDetail;
  currency = currency?.split(",")[0];

  const [currentConvert, setCurrentConvert] = useState(0);
  const [converting, setConverting] = useState(true);
  const [value, setValue] = useState(1);
  const [cache, setCache] = useState({} as CACHE);

  const handleClose = () => {
    setCurrentConvert(0);
    setValue(1);
    console.log(value);
    close();
    setConverting(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(+event.currentTarget.value);
    setConverting(true);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const convert = async () => {
        const token = getUserToken() as string;

        const url =
          "https://country-lookup-server.herokuapp.com/api/v1/country/convertcurrency";
        const payload = {
          code: currency,
          amount: +value,
          convertToCode: "NGN",
        };
        try {
          const res = await postFetch(url, payload, token);
          console.log(res);
          setCurrentConvert(res.conversion);
          setConverting(false);
          setCache((prev) => {
            return { ...prev, [currency]: { convert: res.conversion } };
          });
        } catch (err) {
          console.log(err);
          setConverting(false);
        }
      };

      if (open) {
        if (cache[currency]) {
          console.log("was cached");
          const result = cache[currency].convert * +value;
          setCurrentConvert(result);
          setConverting(false);
        } else {
          console.log("was not cached")
          convert();
        }
      }
    }, 3000);

    return () => clearTimeout(debounce);
  }, [value, currency, open]);

  return (
    <>
      {open && <Overlay onClick={handleClose} />}
      <Modal visible={open}>
        <button onClick={handleClose}>X</button>
        <header>
          <h2>Convert currency</h2>
          <h4>
            {countryDetail.name}
            <small>{countryDetail.emoji}</small>
          </h4>
          {converting && <><DotLoader>Converting </DotLoader> <ConvertSpinner  /> </>}
        </header>
        <div className="currency-converter">
          <div className="inputs">
            <label htmlFor={currency}>{currency}</label>
            <input
              min="1"
              defaultValue={value}
              onChange={handleChange}
              type="number"
              id={currency}
            />
          </div>
          <div className="inputs">
            <label htmlFor="others">NGN</label>
            <input type="number" value={currentConvert} readOnly id="others" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Dialog;
