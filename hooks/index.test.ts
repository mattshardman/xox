import { renderHook, act } from "@testing-library/react-hooks";
import { useGame } from ".";

test("it renders a board of arbitrary size", () => {
  const { result } = renderHook(() => useGame(3));
  const { result: r2 } = renderHook(() => useGame(7));

  expect(result.current.board?.length).toBe(3);
  expect(result.current.board?.[0].length).toBe(3);

  expect(r2.current.board?.length).toBe(7);
  expect(r2.current.board?.[0].length).toBe(7);
});

test("user can interact with board", () => {
  const { result } = renderHook(() => useGame(3));

  act(() => result.current.playMove({ row: 0, col: 0 }));
  act(() => result.current.playMove({ row: 2, col: 3 }));

  expect(result.current.board[0][0]).toBe("X");
  expect(result.current.board[2][3]).toBe("O");
});

test("board correctly resets", () => {
  const { result } = renderHook(() => useGame(3));

  act(() => result.current.playMove({ row: 0, col: 0 }));
  act(() => result.current.playMove({ row: 2, col: 3 }));
  act(() => result.current.reset());

  expect(result.current.board[0][0]).toBe(null);
});

test("hook can determine winner", () => {
  const { result } = renderHook(() => useGame(3));

  act(() => result.current.playMove({ row: 0, col: 0 }));
  act(() => result.current.playMove({ row: 1, col: 0 }));
  act(() => result.current.playMove({ row: 0, col: 1 })); 
  act(() => result.current.playMove({ row: 1, col: 1 }));
  act(() => result.current.playMove({ row: 0, col: 2 })); 

  expect(result.current.winner).toBe("X");
});