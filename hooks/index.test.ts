import { renderHook, act } from "@testing-library/react-hooks";
import { useGame } from ".";

test("it works", () => {
  const { result } = renderHook(() => useGame(3));
  const { result: r2 } = renderHook(() => useGame(7));

  expect(result.current.board?.length).toBe(3);
  expect(result.current.board?.[0].length).toBe(3);

  expect(r2.current.board?.length).toBe(7);
  expect(r2.current.board?.[0].length).toBe(7);
});
