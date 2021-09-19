import React from 'react';
import './Country.css'

const Country = (props) => {
      // console.log(props.country)
      const { name, flag, capital, population } = props.country;
      return (
            <div>
                  <div className="card">
                        <h1>This is : {name}</h1>
                        <img src={flag} alt="" />
                        <h3>Capital is : {capital}</h3>
                        <p>Population : {population}</p>
                  </div>
            </div>
      );
};

export default Country;