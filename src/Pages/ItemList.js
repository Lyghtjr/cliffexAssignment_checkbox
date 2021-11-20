import React, { useState } from "react";
import { Link } from "react-router-dom";
const ItemList = () => {
  const Itemarray = [
    "high",
    "cruel",
    "nappy",
    "sable",
    "mine",
    "vagabond",
    "sassy",
    "steer",
    "argument",
    "unaccountable",
    "tie",
    "middle",
  ];
  const [item, setItem] = useState(Itemarray);
  const [favourites, setFavourites] = useState([]);
  const handleClick = (e) => {
    if (e.target.checked) {
      setFavourites([...favourites, e.target.name]);
    } else {
      setFavourites(favourites.filter((item) => item !== e.target.name));
    }
  }
  return (
    <div>
      <Link to={{pathname:"/favourites",data:{favourites}}}>Favourites</Link>
      <h1>Machine Test</h1>
      {item.map((item, index) => (
        <div key={index}>
          <input
            checked={favourites.includes(item)}
            onChange={handleClick}
            name={item}
            type="checkbox"
          />
          {item}
        </div>
      ))}
      <h2>Show list</h2>
      {
          favourites
      }
    </div>
  );
};

export default ItemList;
