import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer, updateName } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;

    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="font-custom flex flex-col justify-center items-center h-[70vh] text-white  ">
      <div className="shadow-sm rounded-lg  py-4 px-6 bg-[#35255c] tracking-tighter ">
        <h2 className="text-center font-bold text-2xl">Create new customer</h2>
        <div className="max-w-[400px] space-y-4 ">
          <div className="flex justify-between">
            <label className="font-semibold text-md text-nowrap  ">
              Customer full name
            </label>
            <input
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex justify-between ">
            <label className="font-semibold text-md text-nowrap">
              National ID
            </label>
            <input
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              type="text"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-100 border-0 rounded-lg tracking-wide text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm  text-center ]"
              onClick={handleClick}
            >
              Create new customer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
