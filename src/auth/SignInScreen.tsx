import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignInInput from "./SignInInput";
import EmailIcon from "./EmailIcon";
import PasswordIcon from "./PasswordIcon";
import { isEmail, isAllowedPassword } from "./helpers";

interface SignInScreenProps {
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const SignInScreen: React.FC<SignInScreenProps> = ({
  setUser,
}: SignInScreenProps) => {
  const [email, setEmail] = useState("");
  const emailValidationMessage = "Некорректный адрес эл. почты";
  const [password, setPassword] = useState("");
  const passwordValidationMessage =
    "Пароль должен содержать больше 8 символов, 1 строчную, 1 заглавную букву и 1 цифру";
  const [isDisabled, setIsDisabled] = useState(true);
  const [invokeErrorMessage, setInvokeErrorMessage] = useState("");
  const isEmailValid = () => {
    return isEmail(email);
  };
  const isPasswordValid = () => {
    return isAllowedPassword(password);
  };

  useEffect(() => {
    if (isEmailValid() && isPasswordValid()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      setInvokeErrorMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handlePress = () => {
    if (email === "test@test.ru" && password === "qwezxcqwE1") {
      setUser("token");
    } else {
      setInvokeErrorMessage("Пользователь не найден");
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
        validationMessage={emailValidationMessage}
        isValid={isEmailValid()}
      />
      <SignInInput
        value={password}
        onChange={setPassword}
        label="Пароль"
        inputIcon={<PasswordIcon />}
        inputType="password"
        validationMessage={passwordValidationMessage}
        isValid={isPasswordValid()}
      />
      <SignInButton
        onClick={handlePress}
        disabled={isDisabled}
        isDisabled={isDisabled}
      >
        Войти
      </SignInButton>
      {invokeErrorMessage !== "" && (
        <InvokedErrorMessage>{invokeErrorMessage}</InvokedErrorMessage>
      )}
    </SignInForm>
  );
};

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

const SignInButton = styled.button<{ isDisabled: boolean }>`
  cursor: ${(props) => (props.isDisabled ? "normal" : "pointer")};
  outline: none;
  border: none;
  margin-top: 5em;
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
  margin-top: 1em;
  color: #a72b2b;
`;

export default SignInScreen;
