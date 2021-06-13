import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../auth/AuthContext";
import { useLogoutMutation } from "../generated/graphql";

const ProfilePage: React.FC = () => {
  const user = useContext(AuthContext).user;
  const [{ fetching }, logout] = useLogoutMutation();
  const handleLogout = () => {
    logout();
  };
  return (
    <ProfileWrapper>
      <>
      Пользователь: {user?.userEmail}
      </>
      <ExitProfileButton onClick={handleLogout} disabled={fetching}>
        Выход
      </ExitProfileButton>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  min-height: 88vh;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const ExitProfileButton = styled.button`
  outline: none;
  cursor: pointer;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 100px;
  color: #fff;
  &:hover {
    border-bottom: 5px solid #000;
  }
  background-color: #A72B2B;
  width: 100px;
  height: 100px;
  font-size: 1.1em;
  font-weight: bold;
`;

export default ProfilePage;
