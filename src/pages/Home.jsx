import React, { useEffect, useMemo, useState } from "react";
import CountryCard from "../components/CountryCard";
import FilterCountry from "../components/FilterCountry";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchCountry from "../components/SearchCountry";

function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(16);
  const [value, setValue] = useState("");
  const [totalCountries, setTotalCountries] = useState(countries.length);
  const [region, setRegion] = useState("Filter By Region");

  const fetchCountries = async () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  let indexOfLastCountry = currentPage * countryPerPage;
  let indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const countriesData = useMemo(() => {
    let computedCountries = countries;


    if (region === "" || region === "Filter By Region" || region === "All") {
     computedCountries = countries
    } else {
      computedCountries = countries.filter(
        (country) => country.region === region
      );
    }
    if (value) {
      computedCountries = countries.filter((country) =>
        country.name.common?.toLowerCase().includes(value?.toLowerCase())
      );
    }

    setTotalCountries(computedCountries.length);

    console.log(computedCountries);

    return computedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  }, [value, region, countries, indexOfFirstCountry, indexOfLastCountry]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <section className="home">
        <div className="filter-options">
          <SearchCountry
            value={value}
            region={region}
            setRegion={setRegion}
            setValue={setValue}
            setCurrentPage={setCurrentPage}
          />
          <FilterCountry
            setValue={setValue}
            setRegion={setRegion}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <ul className="country-list">
          {countriesData &&
            countriesData.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
        </ul>
        <Pagination
          paginate={paginate}
          totalCountries={totalCountries}
          countryPerPage={countryPerPage}
        />
      </section>
    );
  }
}

export default Home;
