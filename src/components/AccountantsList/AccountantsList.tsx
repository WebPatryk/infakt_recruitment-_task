import React, { useEffect, useState } from "react";
import Error from "../Error";
import Spinner from "../Spinner";
import { generateApiUrl } from "utils/api";
import { Accountant } from "components/Accountant/Accountant";
import { AddAccountantButton } from "components/AddAccountantButton/AddAccountantButton";
import { AccountantContainer, ButtonContainer, Container } from "./style";
import {
  IAccountantsList,
  AccountantType,
} from "components/AccountantsList/types";

const AccountantsList = () => {
  const [users, setUsers] = useState<IAccountantsList>({
    results: [],
    info: { page: 1 },
  });
  const [result, setResult] = useState<number>(5);
  const [loadingAccountants, setLoadingAccountants] = useState<boolean>(true);
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoadingSpinner(true);
        const api = generateApiUrl({ result });
        const data = await fetch(api, {
          signal: abortController.signal,
        });
        const json = await data.json();

        setUsers(json);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoadingAccountants(false);
        setLoadingSpinner(false);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [result]);

  const addNewAccountant = () => {
    setResult(result + 1);
  };

  return (
    <>
      <Container data-testid="accountants-list">
        <AccountantContainer>
          {error && <Error error={error} />}
          {loadingAccountants ? (
            <Spinner data-testid="spinner" />
          ) : (
            users.results.map((user: AccountantType) => (
              <Accountant
                data-testid="accountant-card"
                key={user.login.uuid}
                {...user}
              />
            ))
          )}
        </AccountantContainer>
      </Container>
      {users.results.length > 0 && (
        <ButtonContainer>
          <AddAccountantButton
            loading={loadingSpinner}
            onClick={addNewAccountant}
          >
            Add new Accountant
          </AddAccountantButton>
        </ButtonContainer>
      )}
    </>
  );
};

export default AccountantsList;
