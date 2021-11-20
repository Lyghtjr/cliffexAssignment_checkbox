import React from "react";


const Favourites = (props) => {
console.log(props);
const {favourites} = props.location.data;
  return (
    <>
      <h1>Favourites</h1>
      {
         favourites.map((item, index) => {
              return <div key={index}>{item}</div>
         })
      }
    </>
  );
};

export default Favourites;
