import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getLocationById, deleteLocation } from '../../modules/LocationManager';

export const LocationDetail = () => {
  const [Location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {LocationId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setIsLoading(true);
    deleteLocation(LocationId).then(() =>
      navigate("/Locations")
    );
  }

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", LocationId)
    getLocationById(LocationId)
      .then(Location => {
        setLocation(Location);
        setIsLoading(false);
      });
  }, [LocationId]);

  return (
    <section className="location">
      <h3 className="location__name">{Location.name}</h3>
      <div className="location_address">{Location.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          delete
        </button>
    </section>
  );
}

