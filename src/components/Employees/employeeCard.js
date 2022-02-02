import React from "react"
import "./employees.css"

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee_location">{employee.address}</div>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
    </section>
)