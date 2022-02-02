import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animals/animalCard.js'
import { EmployeeCard } from "./components/Employees/employeeCard"
import { LocationCard } from "./components/Locations/locationCard"
import { OwnerCard } from "./components/Owners/ownerCard"
import { AnimalList } from "./components/animals/animalList"
import { EmployeeList } from "./components/Employees/EmployeeList"
import { LocationList } from "./components/Locations/LocationList"
import { CustomerList } from "./components/Owners/OwnerList"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />
                <Route path="/Employees" element={<EmployeeList />} />
                <Route path="/Locations" element={<LocationList />} />
                <Route path="/Customers" element={<CustomerList />} />
            </Routes>
        </>
    )
}