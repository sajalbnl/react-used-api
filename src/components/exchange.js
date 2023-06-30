import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/exchange.css";

function Exchange() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges"
        );
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="exchanges">
        {data.map((i) => (
          <Card name={i.name} imgSrc={i.image} key={i.id} />
        ))}
      </div>
    </>
  );
}

export default Exchange;
