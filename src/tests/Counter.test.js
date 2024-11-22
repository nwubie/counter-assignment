import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const header = screen.getByText(/counter/i);
  expect(header).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("0");
});

test("clicking + increments the count", () => {
  const incrementButton = screen.getByText("+");
  userEvent.click(incrementButton);

  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("1");
});

test("clicking - decrements the count", () => {
  const decrementButton = screen.getByText("-");
  userEvent.click(decrementButton);

  const count = screen.getByTestId("count");
  expect(count.textContent).toBe("-1");
});
