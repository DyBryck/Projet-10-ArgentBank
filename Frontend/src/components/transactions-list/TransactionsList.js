import React from "react";
import Transaction from "../transaction/Transaction";

const TransactionsList = ({ transactions }) => {
  return (
    <div className="transactions-list">
      <div className="transactions-header">
        <p>Date</p>
        <p>Description</p>
        <p>Amount</p>
        <p>Balance</p>
      </div>
      <div>
        {Array.isArray(transactions) &&
          transactions.map((transaction, i) => (
            <Transaction
              key={transaction.note + " - " + i}
              transaction={transaction}
            />
          ))}
      </div>
    </div>
  );
};

export default TransactionsList;
