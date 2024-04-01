import { fireEvent, render, screen } from "@testing-library/react";
import Games from "@/components/Games";
import { User } from "@/types";
import { userEvent } from "@testing-library/user-event";

// Mock game data
jest.mock(
  "@/data/data.json",
  () => ({
    games: [
      {
        id: 1,
        name: "Game 1",
        provider: 1,
        cover: "https://images.example.com/game1.jpg",
        coverLarge: "https://images.example.com/game1.jpg",
        date: "2021-07-29T15:36:31.974Z",
      },
      {
        id: 2,
        name: "Game 2",
        provider: 1,
        cover: "https://images.example.com/game2.jpg",
        coverLarge: "https://images.example.com/game2.jpg",
        date: "2020-07-29T15:36:31.974Z",
      },
      {
        id: 3,
        name: "Game 3",
        provider: 2,
        cover: "https://images.example.com/game3.jpg",
        coverLarge: "https://images.example.com/game3.jpg",
        date: "2023-07-29T15:36:31.974Z",
      },
      {
        id: 4,
        name: "Game 4",
        provider: 2,
        cover: "https://images.example.com/game4.jpg",
        coverLarge: "https://images.example.com/game4.jpg",
        date: "2020-08-29T15:36:31.974Z",
      },
    ],
    providers: [
      {
        id: 1,
        name: "Provider 1",
        logo: "provider1.png",
      },
      {
        id: 2,
        name: "Provider 2",
        logo: "provider2.png",
      },
    ],
    groups: [
      {
        id: 1,
        name: "Group 1",
        games: [1, 2, 3],
      },
      {
        id: 2,
        name: "Group 2",
        games: [2, 3],
      },
    ],
  }),
  { virtual: true },
);

const user: User = {
  username: "username",
  password: "password",
  name: "Player name",
};

describe("Games Component", () => {
  it("renders without crashing", () => {
    render(<Games user={user} />);
    expect(screen.getByText(/reset/i)).toBeInTheDocument();
    expect(screen.getByText(/Player name/i)).toBeInTheDocument();
    expect(screen.getByText(/Game 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Games amount: 4/i)).toBeInTheDocument();

    const providers = screen.getByTestId("providers");
    expect(providers.querySelectorAll("button")).toHaveLength(2);

    const groups = screen.getByTestId("groups");
    expect(groups.querySelectorAll("button")).toHaveLength(2);
  });

  it("filters and displays games based on search input", async () => {
    render(<Games user={user} />);

    const searchInput = screen.getByPlaceholderText("Search");

    fireEvent.change(searchInput, {
      target: { value: "game 1" },
    });

    expect(screen.getByTestId("games").querySelectorAll("div")).toHaveLength(1);

    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "asd" },
    });

    expect(screen.getByText(/No games found/i)).toBeInTheDocument();
  });

  it("filters bg provider", () => {
    render(<Games user={user} />);

    fireEvent.click(screen.getByText("Provider 2"));
    fireEvent.click(screen.getByText("Provider 1"));
    fireEvent.click(screen.getByText("Provider 2"));

    expect(screen.getByTestId("games").querySelectorAll("div")).toHaveLength(2);
  });

  it("filters bg group", () => {
    render(<Games user={user} />);

    fireEvent.click(screen.getByText("Group 2"));
    fireEvent.click(screen.getByText("Group 1"));
    fireEvent.click(screen.getByText("Group 2"));

    expect(screen.getByTestId("games").querySelectorAll("div")).toHaveLength(3);
  });

  it("sorts correctly", () => {
    render(<Games user={user} />);

    fireEvent.click(screen.getByText("Z-A"));

    // check the first game
    expect(
      screen.getByTestId("games").querySelectorAll("div")[0].textContent,
    ).toContain("Game 4");

    // sort again by date
    fireEvent.click(screen.getByText("Newest"));

    // check the first game
    expect(
      screen.getByTestId("games").querySelectorAll("div")[0].textContent,
    ).toContain("Game 2");
  });

  it("column index change should work", () => {
    render(<Games user={user} />);

    expect(
      screen.getByTestId("games").classList.contains("xs:grid-cols-4"),
    ).toBe(true);

    fireEvent.mouseEnter(screen.getByRole("button", { name: "3" }));
    fireEvent.mouseLeave(screen.getByRole("button", { name: "3" }));

    fireEvent.click(screen.getByRole("button", { name: "3" }));

    expect(
      screen.getByTestId("games").classList.contains("xs:grid-cols-3"),
    ).toBe(true);
  });

  it("reset button should work", () => {
    render(<Games user={user} />);

    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "game 1" },
    });
    expect(screen.getByPlaceholderText("Search")).toHaveValue("game 1");

    expect(screen.getByTestId("games").querySelectorAll("div")).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByPlaceholderText("Search")).toHaveValue("");

    expect(screen.getByTestId("games").querySelectorAll("div")).toHaveLength(4);
  });
});
