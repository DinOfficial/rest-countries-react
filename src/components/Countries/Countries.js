import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
      const [countries, setCountries] = useState([]);
      useEffect(() => {
            fetch('https://restcountries.eu/rest/v2/all')
                  .then(res => res.json())
                  .then(data =>setCountries(data))
      },[])
      return (
            <div>
                  <h1>This is inside from Countries</h1>
                  <div className="country">
                        {
                              countries.slice(0, 50).map(country => <Country
                                    key={country.capital}
                                    country={country}
                              ></Country>)
                        }
                  </div>
            </div>
      );
};

export default Countries;