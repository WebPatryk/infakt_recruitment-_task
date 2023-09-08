import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  background: ${(props) => props.theme.colors?.secondaryColor};
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors?.primaryColor};
  transition: opacity 0.3s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const App = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function Home() {
  return (
    <App>
      <header className="App-header">
        <Button to="ksiegowi">Ksiegowi</Button>
      </header>
    </App>
  );
}

export default Home;
