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


 <h2>Nashville Kennels</h2>
<small>Loving care when you're not there.</small>
<address>
    <div>Visit Us at the Nashville North Location</div>
    <div>500 Puppy Way</div>
</address>

< PropsAndState yourName="RJ"/>
<h2>Animals</h2>
<article className="animals">
    <AnimalCard />
    <AnimalCard />
    <AnimalCard />
</article>

<h2>Employees</h2>
<article className="employees">
    <EmployeeCard />
    <EmployeeCard />
    <EmployeeCard />
</article>

<h2>Locations</h2>
<article className="employees">
    <LocationCard />
    <LocationCard />
</article>

<h2>Customers</h2>
<article className="owners">
    <OwnerCard />
    <OwnerCard />
    <OwnerCard />
    <OwnerCard />
</article> 
    </>
)