import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const PlanetCard = () => {
  const { residentId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [residents, setResidents] = useState([]);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        const planetData = data.results.find(
          (planet) => planet.name === residentId
        );
        if (planetData) {
          setPlanet(planetData);
          const promises = planetData.residents.map((residentURL) =>
            fetch(residentURL).then((res) => res.json())
          );

          const residentsData = await Promise.all(promises);
          setResidents(residentsData);
        } else {
          console.error("Planet not found");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [residentId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      <h1>Residents-details</h1>
      <div className="residents-details">
        <motion.div
          className="planet-card"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="planet-name">{planet.name}</h2>
          <ul className="residents-list">
            {residents.map((resident, index) => (
              <motion.li
                key={index}
                className="resident-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p>
                  <strong>Name:</strong> {resident.name}
                </p>
                <p>
                  <strong>Height:</strong> {resident.height}
                </p>
                <p>
                  <strong>Mass:</strong> {resident.mass}
                </p>
                <p>
                  <strong>Gender:</strong> {resident.gender}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default PlanetCard;
