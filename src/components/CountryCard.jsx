import React from "react";
import {Link} from 'react-router-dom'
function CountryCard({ country }) {
  return (
    <>
      {country && (
        <li className="country-card">
          <Link to={`/country/${country.cca3}`}>
          <div className="country-card-header">
            <img
              src={country.flags.png && country.flags.png}
              alt={country.name.common && country.name.common}
              className="country-image"
            />
          </div>
          <div className="country-card-body">
            <div className="country-details">
              <h5 className="country-name">
                {country.name.common && country.name.common}
              </h5>
              <div className="country-detail">
                <b>Population : </b>{" "}
                <span>{country.population && country.population}</span>
              </div>
              <div className="country-detail">
                <b>Region : </b> <span>{country.region && country.region}</span>
              </div>
              <div className="country-detail">
                <b>Capital : </b>{" "}
                <span>{country.capital && country.capital[0] }</span>
              </div>
            </div>
          </div>
          </Link>
        </li>
      )}
    </>
  );
}

export default CountryCard;
