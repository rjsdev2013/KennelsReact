const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/Locations/${locationId}`)
    .then(res => res.json())
  }
  
  export const getAllLocations = () => {
    return fetch(`${remoteURL}/Locations`)
    .then(res => res.json())
  }

  export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/Locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }