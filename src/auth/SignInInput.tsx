import React from "react";
import styled from "styled-components";

interface SignInInputProps {
  label: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  inputIcon: JSX.Element;
  inputType: string;
  validationMessage: string
  isValid: boolean
}

const SignInInput: React.FC<SignInInputProps> = ({
  label,
  value,
  onChange,
  inputIcon,
  inputType,
  validationMessage,
  isValid
}: SignInInputProps) => {

  return (
    <InputWrapper>
      <InputIcon>{inputIcon}</InputIcon>
      <FormInput
        type={inputType}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <InputUnderline className="input-underline"></InputUnderline>
      <InputLabel>{label}</InputLabel>
      {isValid === false && value !== '' && (
        <ValidationMessage>
          {validationMessage}
        </ValidationMessage>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  margin-top: 10%;
  width: 65%;
  height: 2em;
`;

const FormInput = styled.input`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: 2px solid #464646;
  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-2em);
    font-size: 0.9em;
    color: #030d23;
  }
  &:focus ~ .input-underline:before,
  &:valid ~ .input-underline:before {
    transform: scaleX(1);
  }
`;

const InputLabel = styled.label`
  position: absolute;
  bottom: 20%;
  left: 0;
  color: grey;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const InputUnderline = styled.div`
  position: absolute;
  bottom: -2px;
  height: 2px;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #a72b2b;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: -46px;
  bottom: -2px;
`;

const ValidationMessage = styled.div`
  margin-top: 5px;
  font-size: 0.8em;
  color: #A72B2B;
`

export default SignInInput;
