import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ClientContacts, { CLIENT_CONTACTS, theme } from "./ClientContacts";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";

test("should render without error", async () => {
  const { getByText, container } = render(
    <MockedProvider mocks={[]}>
      <ThemeProvider theme={theme}>
        <ClientContacts />
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );

  expect(getByText("Loading...")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
  await wait();
  expect(container).toMatchSnapshot();
});

const fakeResp = {
  "data": {
    "client_contacts": [
      {
        "id": 1,
        "name": "Amelia",
        "companyName": "Hamill, Schuppe and Smith",
        "title": "Direct Accounts Facilitator",
        "address": "East Robertaland",
        "industry": "Assurance"
      },
      {
        "id": 2,
        "name": "Joy",
        "companyName": "Marquardt, Kertzmann and Casper",
        "title": "Investor Tactics Analyst",
        "address": "Kuvalisport",
        "industry": "Applications"
      },
      {
        "id": 3,
        "name": "Houston",
        "companyName": "West - Bechtelar",
        "title": "Central Web Developer",
        "address": "West Cesarstad",
        "industry": "Optimization"
      },
      {
        "id": 4,
        "name": "Cicero",
        "companyName": "Breitenberg and Sons",
        "title": "Human Markets Specialist",
        "address": "Friesenview",
        "industry": "Communications"
      },
      {
        "id": 5,
        "name": "Fanny",
        "companyName": "Bradtke and Sons",
        "title": "Lead Brand Specialist",
        "address": "Emileberg",
        "industry": "Metrics"
      },
      {
        "id": 6,
        "name": "Mathias",
        "companyName": "White Group",
        "title": "Customer Assurance Coordinator",
        "address": "New Daleview",
        "industry": "Configuration"
      },
      {
        "id": 7,
        "name": "Cecil",
        "companyName": "O'Connell - Reilly",
        "title": "Future Branding Supervisor",
        "address": "South Gillianborough",
        "industry": "Interactions"
      },
      {
        "id": 8,
        "name": "Elbert",
        "companyName": "O'Conner - Purdy",
        "title": "Product Data Analyst",
        "address": "New Carson",
        "industry": "Research"
      },
      {
        "id": 9,
        "name": "Melany",
        "companyName": "Ullrich LLC",
        "title": "International Tactics Coordinator",
        "address": "South Lilianaborough",
        "industry": "Data"
      },
      {
        "id": 10,
        "name": "Ezequiel",
        "companyName": "Yundt, Carter and Larson",
        "title": "District Research Technician",
        "address": "Lake Elwin",
        "industry": "Operations"
      },
      {
        "id": 11,
        "name": "D'angelo",
        "companyName": "Kirlin - D'Amore",
        "title": "Chief Solutions Officer",
        "address": "Chrisborough",
        "industry": "Program"
      },
      {
        "id": 12,
        "name": "Jeremie",
        "companyName": "Heidenreich, Bahringer and Altenwerth",
        "title": "Dynamic Interactions Specialist",
        "address": "North Mozelle",
        "industry": "Paradigm"
      },
      {
        "id": 13,
        "name": "Nichole",
        "companyName": "Willms, O'Hara and Reynolds",
        "title": "Lead Program Officer",
        "address": "Markuschester",
        "industry": "Directives"
      },
      {
        "id": 14,
        "name": "Jane",
        "companyName": "Marks - Rutherford",
        "title": "Internal Markets Consultant",
        "address": "Krisfort",
        "industry": "Functionality"
      },
      {
        "id": 15,
        "name": "Dillon",
        "companyName": "Paucek, Swaniawski and Marvin",
        "title": "Customer Creative Planner",
        "address": "West Anissaside",
        "industry": "Accountability"
      },
      {
        "id": 16,
        "name": "Jose",
        "companyName": "Kuhlman - Hegmann",
        "title": "District Configuration Manager",
        "address": "East Wilfrid",
        "industry": "Security"
      },
      {
        "id": 17,
        "name": "Gianni",
        "companyName": "Littel and Sons",
        "title": "Internal Program Manager",
        "address": "South Hillard",
        "industry": "Optimization"
      },
      {
        "id": 18,
        "name": "Letitia",
        "companyName": "Nikolaus, Ritchie and Hauck",
        "title": "Human Mobility Administrator",
        "address": "Kobyfort",
        "industry": "Factors"
      },
      {
        "id": 19,
        "name": "Russ",
        "companyName": "Schumm - Franecki",
        "title": "Lead Intranet Executive",
        "address": "East Robyn",
        "industry": "Accounts"
      },
      {
        "id": 20,
        "name": "Marco",
        "companyName": "Pagac - Lakin",
        "title": "International Accountability Representative",
        "address": "Gaylordstad",
        "industry": "Mobility"
      },
      {
        "id": 21,
        "name": "Brown",
        "companyName": "Bernhard - Huel",
        "title": "Corporate Creative Coordinator",
        "address": "East Antwon",
        "industry": "Marketing"
      },
      {
        "id": 22,
        "name": "Vance",
        "companyName": "Weber, Schowalter and Blanda",
        "title": "Legacy Directives Administrator",
        "address": "South Akeem",
        "industry": "Optimization"
      },
      {
        "id": 23,
        "name": "Mavis",
        "companyName": "Fadel and Sons",
        "title": "District Identity Engineer",
        "address": "Fletaberg",
        "industry": "Quality"
      },
      {
        "id": 24,
        "name": "Leon",
        "companyName": "Moen Inc",
        "title": "Investor Data Liaison",
        "address": "South Maximillia",
        "industry": "Quality"
      },
      {
        "id": 25,
        "name": "Scarlett",
        "companyName": "McDermott, Ebert and Bosco",
        "title": "Forward Research Representative",
        "address": "East Lisettemouth",
        "industry": "Configuration"
      }
    ]
  }
};

test("should show a table of Client Contacts", async () => {
  const mocks = [
    {
      request: {
        query: CLIENT_CONTACTS,
      },
      result: fakeResp,
    },
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <ClientContacts />
      </ThemeProvider>
    </MockedProvider>
  );

  await wait();

  expect(getByText("Client Contacts")).toBeInTheDocument();
});

// Snapshot test
test("Client Contacts snapshot", async () => {
  const mocks = [
    {
      request: {
        query: CLIENT_CONTACTS,
      },
      result: fakeResp,
    },
  ];

  const { container, getByText,  } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <ClientContacts />
      </ThemeProvider>
    </MockedProvider>
  );

  // loading snapshot
  expect(container).toMatchSnapshot();
  await wait();
  // success snapshot
	expect(container).toMatchSnapshot();
	
	// check sorting name
	const nameButton = getByText("Name")
	expect(nameButton).toBeInTheDocument()
	fireEvent.click(nameButton)
});
