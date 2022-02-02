import React, { useState, useEffect } from 'react';
//import the components we will need
import { deleteOwner, getAllOwners } from '../../modules/OwnerManager';
import { OwnerCard } from './ownerCard';

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllOwners().then(customersFromAPI => {
      setCustomers(customersFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {customers.map(customer => <OwnerCard 
      key={customer.id} 
      customer = {customer}
      handleDeleteCustomer = {deleteOwner} />)}
    </div>
  );
};
