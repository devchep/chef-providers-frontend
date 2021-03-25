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
      {user?.userEmail}
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
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
`;

const ExitProfileButton = styled.button`
  margin-top: 100px;
  width: 100px;
  height: 100px;
  font-weight: bold;
`;

export default ProfilePage;
