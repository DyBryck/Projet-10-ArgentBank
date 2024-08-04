import React, { useState } from "react";
import arrowUp from "../../images/circle-arrow-up.svg";
import pen from "../../images/pen.svg";

const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  const formattedAmount = transaction.amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedBalance = transaction.balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="transaction-container">
      <div className="transaction-title">
        <p>{transaction.date}</p>
        <p>{transaction.description}</p>
        <p>${formattedAmount}</p>
        <p>${formattedBalance}</p>
        <img
          src={arrowUp}
          alt=""
          className={isOpen ? "arrow arrow-in" : "arrow arrow-out"}
          onClick={toggleCollapse}
        />
      </div>
      <div className="transaction-wrapper">
        <div
          className={`transaction-content ${
            isOpen ? "transaction-content-open" : ""
          }`}
        >
          <div className="transaction-labels">
            <p>Transaction type</p>
            <p>Category</p>
            <p>Note</p>
          </div>
          <div className="transaction-details">
            <p>{transaction.type}</p>
            <p>
              {transaction.category}
              <img className="pen" src={pen} alt="" />
            </p>
            <p>
              {transaction.note}
              <img className="pen" src={pen} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

// 76PX
