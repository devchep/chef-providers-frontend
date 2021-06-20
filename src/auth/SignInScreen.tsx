import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignInInput from "./SignInInput";
import EmailIcon from "./icons/EmailIcon";
import PasswordIcon from "./icons/PasswordIcon";
import { isEmail, isAllowedPassword } from "../helpers";
import {authConstants} from "../constants"
import { useLoginMutation } from "../generated/graphql";

const SignInScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [invokeErrorMessage, setInvokeErrorMessage] = useState("");
  const isEmailValid = () => {
    return isEmail(email);
  };
  const isPasswordValid = () => {
    return isAllowedPassword(password);
  };

  const [_, signIn] = useLoginMutation();

  useEffect(() => {
    if (isEmailValid() && isPasswordValid()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      setInvokeErrorMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handlePress = async () => {
    if (isEmailValid() && isPasswordValid()) {
      const response = await signIn({ userEmail: email, password: password });
      if (response.data?.login.errors) {
        setInvokeErrorMessage(response.data.login.errors.message);
      }
      // if (response.data?.login.supplier) {
      //   setUser(response.data?.login.supplier);
      // }
    } else {
    }
  };
  return (
    <SignInForm>
      <SignInHeader>
        <LogoLeftColor>Шеф</LogoLeftColor>
        <LogoRightColor>.Поставщики</LogoRightColor>
      </SignInHeader>
      <FormHeader>Вход</FormHeader>
      <SignInInput
        value={email}
        onChange={setEmail}
        label="Адрес эл. почты"
        inputIcon={<EmailIcon />}
        inputType="text"
        validationMessage={authConstants.EMAIL_VALIDATION_MESSAGE}
        isValid={isEmailValid()}
      />
      <SignInInput
        value={password}
        onChange={setPassword}
        label="Пароль"
        inputIcon={<PasswordIcon />}
        inputType="password"
        validationMessage={authConstants.PASSWORD_VALIDATION_MESSAGE}
        isValid={isPasswordValid()}
      />
      {invokeErrorMessage !== "" ? (
        <InvokedErrorMessage>{invokeErrorMessage}</InvokedErrorMessage>
      ) : (
        <InvokedErrorMessage />
      )}
      <SignInButton
        onClick={handlePress}
        disabled={isDisabled}
        isDisabled={isDisabled}
      >
        Войти
      </SignInButton>
    </SignInForm>
  );
};

const SignInForm = styled.div`
  width: 32%;
  height: 68%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 2px 4px 11px #000000;
  border-radius: 20px;
`;

const SignInHeader = styled.div`
  position: absolute;
  font-size: 1.9em;
  font-weight: bold;
  top: -14%;
  left: 50%;
  transform: translate(-50%);
  white-space: nowrap;
`;

const LogoLeftColor = styled.span`
  color: #a72b2b;
`;

const LogoRightColor = styled.span`
  color: #030d23;
`;

const FormHeader = styled.div`
  margin-top: 1em;
  font-size: 1.8em;
  font-weight: bold;
  padding-bottom: 2%;
`;

const SignInButton = styled.button<{ isDisabled: boolean }>`
  cursor: ${(props) => (props.isDisabled ? "normal" : "pointer")};
  outline: none;
  border: none;
  margin-top: 2.5em;
  width: 42%;
  height: 12%;
  font-size: 1.4em;
  font-weight: bold;
  color: ${(props) => (props.isDisabled ? "#7E7E7E" : "#fff")};
  background: ${(props) => (props.isDisabled ? "#ABABAB" : "#a72b2b")};
  box-shadow: 2px 2px 6px rgba(3, 13, 35, 0.25);
  border-radius: 100px;
  &:hover {
    box-shadow: 2px 2px 12px rgba(3, 13, 35, 0.25);
  }
`;

const InvokedErrorMessage = styled.div`
  max-width: 80%;
  height: 5%;
  margin-top: 2.5em;
  color: #a72b2b;
`;

export default SignInScreen;
