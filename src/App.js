import React from "react";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-hidden ">
      <div>
        <h1 className="text-center  m-0  text-[#5c33c5]">
          🏦 The React-Redux Bank ⚛️
        </h1>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <React.Fragment>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
