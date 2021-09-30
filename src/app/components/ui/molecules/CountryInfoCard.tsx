import React from "react";
import { Card } from "../../styles/Card.style";
import { Button } from "../../styles/Button.style";
import { randomPopulation } from "../../../utils/randomPopulation";

interface Props {
  onClick: () => void;

  countryDetails: {
    name: string;
    currency: string;
    emoji: string;
  };
}

const CountryInfoCard: React.FC<Props> = (props) => {
  const handleClick = () => {
    props.onClick();
  };
  return (
      <Card>
        <header>
          <h2>
            {props.countryDetails.name}
            <small>{props.countryDetails.emoji}</small>
          </h2>
        </header>
        <div className="card-body">
          <div className="flex">
            <p>Population:</p>
            <p>{randomPopulation()}</p>
          </div>
          <div className="flex">
            <p>Currency:</p>
            <ul>
              {props.countryDetails.currency.split(",").map((currency) => (
                <li key={currency}>{currency}</li>
              ))}
            </ul>
          </div>
        </div>
        <footer>
          <h4>Currency Converter</h4>
          <Button onClick={handleClick}>Convert</Button>
        </footer>
      </Card>
  );
};

export default CountryInfoCard;
