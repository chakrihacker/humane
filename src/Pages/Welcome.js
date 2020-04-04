import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const StyledWelcome = styled.div`
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

const Row = styled.div`
	& > * {
		margin: 8px !important;
	}
	display: flex;
`

const StyledH1 = styled.h1`
	${({theme}) => `
    padding: ${theme.spacing(1)}px;
	`}
`

const Welcome = () => {
	let history = useHistory();

	const handleClick = (route) =>  {
		history.push(route)
	}
  return (
    <StyledWelcome>
      <StyledH1>Welcome to Humane</StyledH1>
			<Row>
				<Button variant="contained" color="secondary" onClick={() => handleClick("/login")}>Login</Button>
				<Button variant="contained" color="secondary">Sign up</Button>
			</Row>
    </StyledWelcome>
  );
};

export default Welcome;
