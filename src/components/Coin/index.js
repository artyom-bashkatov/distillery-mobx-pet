import React from "react";
import PropTypes from "prop-types";

const Coin = ({ coin }) => {
  const { name, price, dateUpdated } = coin;

  const dynamicView = () => {
    switch (coin.extendedInfo.state) {
      case "pending":
        return <span>Loading...</span>;
      case "fulfilled":
        return <span>{coin.extendedInfo.value}</span>;
      case "rejected":
        return <span>Ooops... </span>;
    }
  };

  return (
    <div>
      <p>
        {name}: {price}$ - (Updated at): {dateUpdated}
      </p>
      <p>Price in RUB (computed propertie example): {coin.priceInRubles}</p>
      <p>Dynamic View from Promise: {dynamicView()}</p>
    </div>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    dateUpdated: PropTypes.string,
    priceInRubles: PropTypes.number,
    extendedInfo: PropTypes.any,
  }),
};

export default Coin;
