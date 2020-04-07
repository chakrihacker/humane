import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SpendHistory, { SPEND_HISTORY, theme } from "./SpendHistory";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";

test("should render without error", async () => {
  const { getByText, container } = render(
    <MockedProvider mocks={[]}>
      <ThemeProvider theme={theme}>
        <SpendHistory />
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
  data: {
    spend_history: {
      spends: [
        {
          id: 41,
          items: ["Unbranded Cotton Pants"],
          merchant: {
            name: "Leannon, Hand and Erdman",
            id: 1,
          },
          amount: 295,
          createdAt: "2020-04-05T03:53:30.058Z",
        },
        {
          id: 42,
          items: ["Licensed Rubber Bacon"],
          merchant: {
            name: "Yost - Marvin",
            id: 18,
          },
          amount: 119,
          createdAt: "2020-04-05T03:53:30.061Z",
        },
        {
          id: 43,
          items: ["Intelligent Granite Mouse"],
          merchant: {
            name: "Leannon, Hand and Erdman",
            id: 1,
          },
          amount: 451,
          createdAt: "2020-04-05T03:53:30.063Z",
        },
        {
          id: 44,
          items: ["Awesome Steel Cheese"],
          merchant: {
            name: "Rowe - Thompson",
            id: 19,
          },
          amount: 290,
          createdAt: "2020-04-05T03:53:30.066Z",
        },
        {
          id: 45,
          items: ["Licensed Plastic Towels"],
          merchant: {
            name: "Veum Group",
            id: 11,
          },
          amount: 723,
          createdAt: "2020-04-05T03:53:30.069Z",
        },
        {
          id: 46,
          items: ["Licensed Metal Chair"],
          merchant: {
            name: "Stracke Inc",
            id: 17,
          },
          amount: 727,
          createdAt: "2020-04-05T03:53:30.071Z",
        },
        {
          id: 47,
          items: ["Small Granite Ball"],
          merchant: {
            name: "Leffler and Sons",
            id: 13,
          },
          amount: 951,
          createdAt: "2020-04-05T03:53:30.074Z",
        },
        {
          id: 48,
          items: ["Small Granite Soap"],
          merchant: {
            name: "Leannon, Hand and Erdman",
            id: 1,
          },
          amount: 883,
          createdAt: "2020-04-05T03:53:30.076Z",
        },
        {
          id: 49,
          items: ["Practical Frozen Hat"],
          merchant: {
            name: "Moen, Altenwerth and Kozey",
            id: 14,
          },
          amount: 292,
          createdAt: "2020-04-05T03:53:30.079Z",
        },
        {
          id: 50,
          items: ["Incredible Metal Chips"],
          merchant: {
            name: "Veum Group",
            id: 11,
          },
          amount: 353,
          createdAt: "2020-04-05T03:53:30.081Z",
        },
        {
          id: 51,
          items: ["Unbranded Wooden Tuna"],
          merchant: {
            name: "Waters, Gleason and Ward",
            id: 6,
          },
          amount: 497,
          createdAt: "2020-04-05T03:53:30.086Z",
        },
        {
          id: 52,
          items: ["Small Wooden Pizza"],
          merchant: {
            name: "Kohler - King",
            id: 8,
          },
          amount: 293,
          createdAt: "2020-04-05T03:53:30.089Z",
        },
        {
          id: 53,
          items: ["Unbranded Plastic Fish"],
          merchant: {
            name: "Schmitt - Koch",
            id: 3,
          },
          amount: 883,
          createdAt: "2020-04-05T03:53:30.092Z",
        },
        {
          id: 54,
          items: ["Incredible Concrete Soap"],
          merchant: {
            name: "Feest and Sons",
            id: 7,
          },
          amount: 315,
          createdAt: "2020-04-05T03:53:30.094Z",
        },
        {
          id: 55,
          items: ["Generic Frozen Bacon"],
          merchant: {
            name: "Veum Group",
            id: 11,
          },
          amount: 335,
          createdAt: "2020-04-05T03:53:30.097Z",
        },
        {
          id: 56,
          items: ["Ergonomic Soft Keyboard"],
          merchant: {
            name: "Leffler and Sons",
            id: 13,
          },
          amount: 821,
          createdAt: "2020-04-05T03:53:30.100Z",
        },
      ],
      cursor: "56",
      hasMore: true,
    },
  },
};

test("should show a table of spend history", async () => {
  const mocks = [
    {
      request: {
        query: SPEND_HISTORY,
      },
      result: fakeResp,
    },
  ];

  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <SpendHistory />
      </ThemeProvider>
    </MockedProvider>
  );

  await wait();

  expect(getByText("Spend History")).toBeInTheDocument();
});

// Snapshot test
test("Spend History snapshot", async () => {
  const mocks = [
    {
      request: {
        query: SPEND_HISTORY,
      },
      result: fakeResp,
    },
  ];

  const { container, getByText,  } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={theme}>
        <SpendHistory />
      </ThemeProvider>
    </MockedProvider>
  );

  // loading snapshot
  expect(container).toMatchSnapshot();
  await wait();
  // success snapshot
	expect(container).toMatchSnapshot();
	
	// check sorting amount
	const amountButton = getByText("Amount")
	expect(amountButton).toBeInTheDocument()
	fireEvent.click(amountButton)
});
