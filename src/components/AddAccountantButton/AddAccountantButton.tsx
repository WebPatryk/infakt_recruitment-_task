import React, { ReactNode } from "react";
import styled from "styled-components";

interface IAddAccountantButton {
  onClick: () => void;
  loading: boolean;
  children: ReactNode;
}

const Button = styled.button.attrs(({ type = "button" }) => ({ type }))`
  background-color: ${(props) => props.theme.colors?.secondaryColor};
  color: ${(props) => props.theme.colors?.primaryColor};
  border: none;
  border-radius: 4px;
  margin: 12px;
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: 7px 9px;
  height: 29px;
`;

export const AddAccountantButton = ({
  onClick,
  loading,
  children,
}: IAddAccountantButton) => (
  <Button onClick={onClick} disabled={loading}>
    {loading ? <p>Loading...</p> : <>{children}</>}
  </Button>
);
