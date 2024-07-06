import React from "react";
import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);
  return (
    <div className="balance rounded-lg text-[#7248db] ">
      {formatCurrency(balance)}
    </div>
  );
}

export default BalanceDisplay;
