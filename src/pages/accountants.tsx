import React from "react";
import AccountantsList from "../components/AccountantsList/AccountantsList";
import InfaktLogo from "../assets/infakt-logo.png";
import styled from "styled-components";

const Image = styled.img`
  margin: 2rem 0;
`;

function AccountantsPage() {
  return (
    <div>
      <Image src={InfaktLogo} alt="logo" />
      <AccountantsList />
    </div>
  );
}

export default AccountantsPage;
