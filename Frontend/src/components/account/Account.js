import React, { useState } from "react";
import TransactionsList from "../transactions-list/TransactionsList";

const Account = ({ account }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  const formattedAmount = account.balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section className="account">
      <div className="account-container">
        <div className="account-content-wrapper">
          <h3 className="account-title">{account.title}</h3>
          <p className="account-amount">${formattedAmount}</p>
          <p className="account-amount-description">
            {account.type === "Credit"
              ? "Current Balance"
              : "Available Balance"}
          </p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={toggleCollapse}>
            View transactions
          </button>
        </div>
      </div>
      <div
        className={
          isOpen ? "transactions-wrapper-open" : "transactions-wrapper"
        }
      >
        <div
          className={`transactions-content ${
            isOpen ? "transactions-content-open" : ""
          }`}
        >
          <TransactionsList transactions={account.transactions} />
        </div>
      </div>
    </section>
  );
};

export default Account;
