import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup, {SIGNUP} from "./Signup";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

test("should render without error", () => {
  render(
    <MockedProvider mocks={[]}>
      <ThemeProvider theme={theme}>
        <Signup />
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );
});

test("should signup when email and password is entered", async () => {
  const fakeResp = { token: "xyz" };
  const mocks = [
    {
      request: {
        query: SIGNUP,
        variables: { email: "subramanya@fyndx.io", password: "123456", name: "Subramanya" },
      },
      result: { data: { signup: fakeResp } },
    },
  ];
  const { getByText, getByLabelText, findByRole } = render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Signup />
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );
  const signupButtonText = getByText("Signup");
  expect(signupButtonText).toBeInTheDocument();

  // fill out the form
  fireEvent.change(getByLabelText(/Name/i), {
    target: { value: "Subramanya" }
  });
  fireEvent.change(getByLabelText(/Email/i), {
    target: { value: "subramanya@fyndx.io" },
  });
  fireEvent.change(getByLabelText(/Password/i), {
    target: { value: "123456" },
  });

  fireEvent.click(getByText(/Signup/i));

  await findByRole("success");

  expect(window.localStorage.getItem("token")).toEqual(fakeResp.token);
});
