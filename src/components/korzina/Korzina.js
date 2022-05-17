import React from "react";

const Korzina = ({ korzina }) => {
  return (
    <div>
      Korzina
      <ul>
        {korzina.map((product) => (
          <li key={product.id}>
            <img alt="test" src={product.images[0]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Korzina;
