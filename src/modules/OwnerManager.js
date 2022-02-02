const remoteURL = "http://localhost:8088"

export const getOwnerById = (ownerId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/Customers/${ownerId}`)
    .then(res => res.json())
  }
  
  export const getAllOwners = () => {
    return fetch(`${remoteURL}/Customers`)
    .then(res => res.json())
  }

  export const deleteOwner = (id) => {
    return fetch(`${remoteURL}/Customers/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }