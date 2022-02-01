import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animals/animalCard.js'
import { EmployeeCard } from "./components/Employees/employeeCard"
import { LocationCard } from "./components/Locations/locationCard"
import { OwnerCard } from "./components/Owners/ownerCard"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />
                <Route path="/Employees" element={<EmployeeCard />} />
                <Route path="/Locations" element={<LocationCard />} />
                <Route path="/Customers" element={<OwnerCard />} />
            </Routes>
        </>
    )
}