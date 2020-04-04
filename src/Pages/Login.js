import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";


const StyledLogin = styled.div`
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

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
	let history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	const [login, { data }] = useMutation(LOGIN);

	useEffect(() => {
		let token = localStorage.getItem("token")
		if(token) {
			history.push("/dashboard")
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	useEffect(() => {
		if (data) {
			localStorage.setItem("token", data.login.token)
			history.push("/dashboard")
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

  const handleLogin = () => {
    login({ variables: { email: email, password: password } });
	};
	
	// TODO: Add form

  return (
    <StyledLogin>
      <StyledContainer>
        <StyledH1>Welcome Back!</StyledH1>
        <TextField
          variant={"outlined"}
          placeholder={"Email"}
          label={"Email"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant={"outlined"}
          placeholder={"Password"}
          label={"Password"}
          value={password}
          type={"password"}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleLogin}>
          Login
        </Button>
      </StyledContainer>
    </StyledLogin>
  );
};

export default Login;
