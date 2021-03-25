import React from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Main from "./Main";
import SignInScreen from "./auth/SignInScreen";
import { AuthProvider } from "./auth/AuthContext";
import { useMeQuery } from "./generated/graphql";

function App() {
  const [{ data, fetching }] = useMeQuery();

  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = <SignInScreen />;
  } else {
    body = (
      <AuthProvider value={{ user: null }}>
        <AppContainer>
          <Header />
          <Main />
        </AppContainer>
      </AuthProvider>
    );
  }

  return <>{body}</>;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #eeeeee;
`;

export default App;
