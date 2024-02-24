import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchData("https://swapi.dev/api/planets/");
  }, []);

  const fetchData = async (pageUrl) => {
    try {
      const response = await fetch(pageUrl);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchData(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetchData(prevPage);
    }
  };

  return (
    <>
      <h1>Planets Directory</h1>
      <div className="planets-container">
        {planets.map((planet) => {
          console.log({ planet }, planet.residents);
          return (
            <div key={planet.name} className="planet-card">
              <h2>{planet.name}</h2>
              <div className="planet-info">
                <p>
                  <strong>Climate:</strong> {planet.climate}
                </p>
                <p>
                  <strong>Population:</strong> {planet.population}
                </p>
                <p>
                  <strong>Terrain:</strong> {planet.terrain}
                </p>
                <p>
                  <strong>surface_water:</strong> {planet.surface_water}
                </p>
              </div>
              {planet.residents && (
                <Link
                  to={{
                    pathname: `/residents/${encodeURIComponent(planet.name)}`,
                  }}
                  className="resident-link"
                >
                  View Residents
                </Link>
              )}
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!prevPage}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={!nextPage}>
          Next Page
        </button>
      </div>
    </>
  );
};

export default PlanetList;
