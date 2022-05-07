import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function CountryDetail({ history }) {
  const { country_id } = useParams();
  const [country, setCountry] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const code = country_id.toLocaleLowerCase();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      fetch("https://restcountries.com/v2/alpha/" + code)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setCountry(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };

    fetchCountry();
  }, [code]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />
  } else {
    return (
      <section className="country-detail-section">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="grid">
          <div className="country-detail-left">
            <img
              src={country.flags.png}
              alt={country.name}
              className="country-image"
            />
            <div className="languages">
              <b>Languages :</b>
              {country.languages &&
                country.languages.map((element) => (
                  <span className="badges" key={element.iso639_2}>
                    {element.name}
                  </span>
                ))}
            </div>
            <div className="borders">
              <b>Borders :</b>
              {country.borders &&
                country.borders.map((element) => (
                  <span className="badges" key={element}>
                    {element}
                  </span>
                ))}
            </div>
          </div>
          <div className="country-detail-right">
            <h3 className="country-name">{country.name}</h3>
            <div className="country-detail-item country-capital">
              <b>Capital :</b> <span>{country.capital}</span>
            </div>
            <div className="country-detail-item country-capital">
              <b>Population :</b> <span>{country.population}</span>
            </div>
            <div className="country-detail-item country-capital">
              <b>Region :</b> <span>{country.region}</span>
            </div>
            <div className="country-detail-item country-capital">
              <b>Top Level Domain :</b> <span>{country.topLevelDomain}</span>
            </div>
            <div className="country-detail-item country-capital">
              <b>Numeric Code :</b> <span>{country.numericCode}</span>
            </div>
            <div className="country-detail-item country-capital">
              <b>Currencies :</b>{" "}
              {country.currencies &&
                country.currencies.map((element) => (
                  <span key={element.code}>
                    {element.code} - {element.name}{" "}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CountryDetail;
