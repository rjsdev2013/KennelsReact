import React from "react"
import { Link } from "react-router-dom";
import "./locations.css"


export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location_location">{location.address}</div>
        <Link to={`/Locations/${location.id}`}>
          <button>Details</button>
        </Link>
    </section>
)