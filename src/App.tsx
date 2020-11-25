import React from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Main from "./Main";

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #EEEEEE;
`;

export default App;
