import { useGame } from ".";

test("it works", () => {
  const res = useGame();

  expect(res).toBe(true);
});
