import React from "react";
import PropTypes from "prop-types";

const Coin = ({ coin }) => {
  const { name, price, dateUpdated } = coin;
  return (
    <p>
      {name}: {price}$ - (Updated at): {dateUpdated}
    </p>
  );
};

Coin.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    dateUpdated: PropTypes.string,
  }),
};

export default Coin;
