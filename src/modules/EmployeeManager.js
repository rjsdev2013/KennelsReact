const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/Employees/${employeeId}`)
    .then(res => res.json())
  }
  
  export const getAllEmployees = () => {
    return fetch(`${remoteURL}/Employees`)
    .then(res => res.json())
  }

  export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/Employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }