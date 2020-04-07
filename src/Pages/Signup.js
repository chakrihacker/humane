import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

const StyledSignup = styled.div`
  ${({ theme }) => `
		background-color: ${theme.palette.primary.main};
		color: #fff;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;

const StyledContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 8px !important;
  }
  ${({ theme }) => `
    padding: ${theme.spacing(3)}px;
	`}
`;

const StyledH1 = styled.h2`
  ${({ theme }) => `
    padding: ${theme.spacing(1)}px;
		color: ${theme.palette.primary.main}
	`}
`;

export const SIGNUP = gql`
  mutation signup($name: String, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signup, { data }] = useMutation(SIGNUP);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.signup.token);
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSignup = () => {
    signup({ variables: { email: email, password: password, name: name } });
  };

  return (
    <StyledSignup>
      <form onSubmit={handleSignup}>
        <StyledContainer>
          <StyledH1>Create your account</StyledH1>
          <TextField
						id={"Name"}
            variant={"outlined"}
            placeholder={"Enter your name"}
            label={"Name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
						id={"Email"}
            variant={"outlined"}
            placeholder={"Email"}
            label={"Email"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
						id={"Password"}
            variant={"outlined"}
            placeholder={"Password"}
            label={"Password"}
            value={password}
            type={"password"}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleSignup}>
            Signup
          </Button>
          {data ? <div role={"success"}></div> : null}
        </StyledContainer>
      </form>
    </StyledSignup>
  );
};

export default Signup;
