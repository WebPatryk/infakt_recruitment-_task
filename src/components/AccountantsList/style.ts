import styled from "styled-components";

const AccountantContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px 0;
`;

const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto 2rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Container = styled.div`
  margin-bottom: 4rem;
`;

export { AccountantContainer, ButtonContainer, Container };
