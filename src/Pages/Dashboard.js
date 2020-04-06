import React, {useEffect} from 'react'
import styled from "styled-components";
import Header from '../Components/Header';
import {  Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import SpendHistory from './SpendHistory';
import ClientContacts from './ClientContacts';

const StyledDashboard = styled.div`
  ${({ theme }) => `
		background-color: ${theme.palette.grey[900]};
		color: #fff;
		height: 100vh;
		display: flex;
		flex-direction: column;
	`}
`;

const Dashboard = () => {
	let { path } = useRouteMatch();
	let history = useHistory()

	useEffect(() => {
		let token = localStorage.getItem("token")
		if(!token) {
			history.push("/login")
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<StyledDashboard>
			<Header />
			<Switch>
				<Route path={`${path}/spend-history`}>
					<SpendHistory />
				</Route>
				<Route path={`${path}/client-contacts`}>
					<ClientContacts />
				</Route>
			</Switch>
		</StyledDashboard>
	)
}

export default Dashboard
