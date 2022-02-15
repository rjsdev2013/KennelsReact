import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './components/animals/animalCard.js'
import { EmployeeCard } from "./components/Employees/employeeCard"
import { LocationCard } from "./components/Locations/locationCard"
import { OwnerCard } from "./components/Owners/ownerCard"
import { AnimalList } from "./components/animals/animalList"
import { EmployeeList } from "./components/Employees/EmployeeList"
import { LocationList } from "./components/Locations/LocationList"
import { CustomerList } from "./components/Owners/OwnerList"
import { AnimalDetail } from "./components/animals/AnimalDetail"
import { LocationDetail } from "./components/Locations/LocationDetail"
import { AnimalForm } from './components/animals/AnimalForm'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { AnimalEditForm } from "./components/animals/AnimalEditForm"


export const ApplicationViews = ({isAuthenticated, setIsAuthenticated}) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={
                <PrivateRoute><AnimalList/></PrivateRoute>
                } />
                <Route exact path="/animals/:animalId" element={
                <PrivateRoute><AnimalDetail/></PrivateRoute>} />
                <Route path="/Employees" element={<EmployeeList />} />
                <Route exact path="/Locations" element={<LocationList />} />
                <Route path="/Locations/:LocationId" element={<LocationDetail />} />
                <Route path="/Customers" element={<CustomerList />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
                <Route path="/animals/:animalId/edit" element={
                        <PrivateRoute>
                            <AnimalEditForm/>
                        </PrivateRoute>
                    } />
            </Routes>
        </>
    )
}