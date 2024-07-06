import React from "react";
import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  console.log(customer);

  return <h2 className="text-white text-center">👋 Welcome, {customer}</h2>;
}

export default Customer;
