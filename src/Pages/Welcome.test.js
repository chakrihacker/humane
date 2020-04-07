import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/react-testing";
import Welcome from "./Welcome";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

test("should match snapshot", () => {
  const {container} = render(
    <MockedProvider mocks={[]}>
      <ThemeProvider theme={theme}>
        <Welcome />
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: MemoryRouter }
	);
	expect(container).toMatchSnapshot()
});
