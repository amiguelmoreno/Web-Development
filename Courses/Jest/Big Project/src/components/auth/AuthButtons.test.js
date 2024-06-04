import { createServer } from "../../test/server";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import AuthButtons from "./AuthButtons";

async function renderComponent() {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons></AuthButtons>
      </MemoryRouter>
    </SWRConfig>
  );

  await screen.findAllByRole("link");
}

describe("when server is not signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: () => {
        return { user: null };
      },
    },
  ]);

  test("sign in and sign up is shown", async () => {
    await renderComponent();

    const signInButton = screen.getByRole("link", { name: /sign in/i });
    const signUpButton = screen.getByRole("link", { name: /sign up/i });

    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute("href", "/signin");
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveAttribute("href", "/signup");
    /* screen.debug();
    await pause();
    screen.debug(); */
  });

  test("sign out is not visible", async () => {
    await renderComponent();

    const signOutButton = screen.queryByRole("link", { name: /signout/i });

    expect(signOutButton).not.toBeInTheDocument();
  });
});

/* const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 100);
  }); */

describe("when server is signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: () => {
        return { id: 3, user: "fasd@fdsa.com" };
      },
    },
  ]);

  test("sign in and sing up are not visible", async () => {
    await renderComponent();

    const signInButton = screen.queryByRole("link", { name: /sign in/i });
    const signUpButton = screen.queryByRole("link", { name: /sign up/i });

    expect(signInButton).not.toBeInTheDocument();
    expect(signUpButton).not.toBeInTheDocument();
  });

  test("sign out is visible", async () => {
    await renderComponent();

    const signOutButton = screen.getByRole("link", { name: /sign out/i });

    expect(signOutButton).toBeInTheDocument();
    expect(signOutButton).toHaveAttribute("href", "/signout");
  });
});
