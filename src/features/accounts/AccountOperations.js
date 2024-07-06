import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    balance,
    isLoading,
  } = useSelector((store) => store.account);

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));

    // dispatch(deposit(depositAmount));

    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!handleWithdrawal) return;

    dispatch(withdraw(withdrawalAmount));

    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));

    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="font-roboto flex justify-center ml-auto mr-auto text-[#5c33c5]  w-full h-full">
      <div className=" ">
        <h2 className="text-center text-[#8d7faf] ">Your account operations</h2>
        <div className="inputs shadow-lg rounded-lg bg-[#35255c]  ">
          <div>
            <label className="text-lg font-semibold">Deposit</label>
            <input
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              type="number"
              value={depositAmount}
              placeholder="deposit amount"
              onChange={(e) => setDepositAmount(+e.target.value)}
            />
            <select
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
            </select>

            <button
              className="bg-[#4c2c9c] text-white border-none font-bold py-2 px-4 rounded hover:bg-[#866bc9] focus:outline-none focus:ring-2 focus:bg-[#4c2c9c]focus:ring-opacity-50 transition duration-300 ease-in-out"
              onClick={handleDeposit}
              disabled={isLoading}
            >
              {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
            </button>
          </div>

          <div>
            <label className="text-lg font-semibold">Withdraw</label>
            <input
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(+e.target.value)}
            />
            <button
              className="bg-[#4c2c9c] text-white border-none font-bold py-2 px-4 rounded hover:bg-[#866bc9] focus:outline-none focus:ring-2 focus:bg-[#4c2c9c]focus:ring-opacity-50 transition duration-300 ease-in-out"
              onClick={handleWithdrawal}
            >
              Withdraw {withdrawalAmount}
            </button>
          </div>

          <div>
            <label className="text-lg font-semibold">Request loan</label>
            <input
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
            />
            <input
              className="focus:outline-none focus:ring-2  focus:ring-[#4c2c9c] focus:ring-offset-2 focus:ring-opacity-100  "
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
            />
            <button
              className="bg-[#4c2c9c] text-white border-none font-bold py-2 px-4 rounded hover:bg-[#866bc9] focus:outline-none focus:ring-2 focus:bg-[#4c2c9c]focus:ring-opacity-50 transition duration-300 ease-in-out"
              onClick={handleRequestLoan}
            >
              Request loan
            </button>
          </div>

          {currentLoan > 0 ? (
            <div className="space-x-5">
              <span className="text-red-800 bg-red-300 rounded-lg px-3 py-1">
                Pay back {"$"}
                {currentLoan} {"purpose: "} {currentLoanPurpose}{" "}
              </span>
              <button
                className="bg-[#4c2c9c] text-white border-none font-bold py-2 px-4 rounded hover:bg-[#866bc9] focus:outline-none focus:ring-2 focus:bg-[#4c2c9c]focus:ring-opacity-50 transition duration-300 ease-in-out"
                onClick={handlePayLoan}
              >
                {" "}
                Pay loan
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
