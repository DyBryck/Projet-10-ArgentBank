import React from "react";
import Account from "../../components/account/Account";
import UserHeader from "../../components/user-header/UserHeader";
import accounts from "../../data/accounts.json";

const User = () => {
  return (
    <>
      <UserHeader />
      {accounts.map((account) => (
        <Account key={account.id} account={account} />
      ))}
    </>
  );
};

export default User;
