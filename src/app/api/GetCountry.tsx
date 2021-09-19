import { useState } from 'react';
import useFetch from '../hooks/useFetch';

interface COUNTRY {
    name: string;
    code: string;
    symbol: string;
    population: number;
    currencyName: string;
}

const GetCountry = async (search: string) => {
    const { getFetch} = useFetch("GET")
    const [country, setCountry] = useState({} as COUNTRY);
    const [error, setError] = useState('');
    const url = `https://country-lookup-server.herokuapp.com/api/v1/country/${search}`;
    const token = localStorage.getItem("countryLookUpToken") as string

    try {
        const data = await getFetch(url, token);

        const countryDetails = {} as COUNTRY
        data.payload.forEach((country: Record<string, any>) => {
            countryDetails.name = country.name
            countryDetails.code = country.currencies[0].code
            countryDetails.symbol = country.currencies[0].symbol
            countryDetails.population = country.population
            countryDetails.currencyName = country.currencies[0].name
        })
        setCountry(countryDetails)
    } catch (err: any) {
        setError(err.message)
    }

    return { error, country}

}

export default  GetCountry