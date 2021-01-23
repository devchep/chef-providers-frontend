import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Main from "./Main";
import SignInScreen from "./auth/SignInScreen";
import { User } from "./auth/types";

// check if already has cookie
function App() {
  const [user, setUser] = useState<User>(null);
  return user ? (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  ) : (
    <SignInScreen setUser={setUser} />
  );
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
