import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login, { LOGIN } from "./Login";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

test("should render without error", () => {
  render(
    <MockedProvider mocks={[]}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );
});

test("should login when email and password is entered", async () => {
  const fakeResp = { token: "xyz" };
  const mocks = [
    {
      request: {
        query: LOGIN,
        variables: { email: "subramanya@fyndx.io", password: "123456" },
      },
      result: { data: { login: fakeResp } },
    },
  ];
  const { getByText, getByLabelText, findByRole } = render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );
  const loginButtonText = getByText("Login");
  expect(loginButtonText).toBeInTheDocument();

  // fill out the form
  fireEvent.change(getByLabelText(/Email/i), {
    target: { value: "subramanya@fyndx.io" },
  });
  fireEvent.change(getByLabelText(/Password/i), {
    target: { value: "123456" },
  });

  fireEvent.click(getByText(/Login/i));

  await findByRole("success");

  expect(window.localStorage.getItem("token")).toEqual(fakeResp.token);
});
