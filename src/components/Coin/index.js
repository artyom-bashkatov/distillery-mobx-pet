import React from "react";
import PropTypes from "prop-types";

const Coin = ({ coin }) => {
  const { name, price, dateUpdated } = coin;
  return (
    <div>
      <p>
        {name}: {price}$ - (Updated at): {dateUpdated}
      </p>
      <p>Price in RUB (computed propertie example): {coin.priceInRubles}</p>
    </div>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    dateUpdated: PropTypes.string,
    priceInRubles: PropTypes.func,
  }),
};

export default Coin;
