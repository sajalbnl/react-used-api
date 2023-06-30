import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/coins.css";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";

function Coins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectedData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
        );

        setData(data);
        setLoading(false);

        console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fectedData();
  }, []);
  return (
    <>
      <div className="coins">
        {loading ? (
          <LoadingSpinner />
        ) : (
          data.map((i) => (
            <Card
              imgSrc={i.image}
              name={i.name}
              count={i.symbol}
              price={`${i.current_price} inr`}
              key={i.id}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Coins;
