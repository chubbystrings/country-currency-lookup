import React from "react";
import { Card } from "../../styles/Card.style";

const CountryInfoCard: React.FC = () => {
  return (
    <Card>
      <header>
        <h2>Nigeria</h2>
      </header>
      <div className="card-body">
        <div className="flex">
          <p>
            Population:
          </p>
          <p>2000</p>
        </div>
        <div className="flex">
          <p>
            Currency:
          </p>
          <p>NGN</p>
        </div>
      </div>
      <footer>
        <h4>Currency Converter</h4>
        <div className="currency-converter">
          <div className="inputs">
            <label htmlFor="NGN">NGN</label>
            <input type="number" min="1" id="NGN" />
          </div>
          <div className="inputs">
            <label htmlFor="USD">USD</label>
            <input type="text" id="USD" />
          </div>
        </div>
      </footer>
    </Card>
  );
};

export default CountryInfoCard;
