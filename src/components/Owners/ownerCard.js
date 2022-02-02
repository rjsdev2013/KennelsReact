import React from "react"
import { CustomerList } from "./OwnerList"
import "./owners.css"

export const OwnerCard = ({customer, handleDeleteCustomer}) => (
    <section className="owner">
        <h3 className="owner__name">{customer.name}</h3>
        <div className="owner_location">{customer.address}</div>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
    </section>
)