import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animals/animalCard.js"
import { EmployeeCard } from "./Employees/employeeCard.js"
import { LocationCard } from "./Locations/locationCard.js"
import { OwnerCard } from "./Owners/ownerCard.js"
import { PropsAndState } from "./PropsAndState.js"
import { NavBar } from "./nav/NavBar.js"
import { ApplicationViews } from "../ApplicationViews.js"

export const Kennel = () => (
    <>
        <NavBar/>
        <ApplicationViews/>
   
    </>
)