import React, { useCallback, useReducer } from "react";

import Board from "../Board";
import Hud from "../Hud";

import GlobalStyle from "./GlobalStyle";
import Root from "./Root";
import useBoardReducer from "./reducer";

export default function App() {
  const [state, dispatch] = useBoardReducer();
  const handleMove = useCallback(
    column => dispatch({ type: "MOVE", column }),
    []
  );
  const handleReset = useCallback(() => dispatch({ type: "RESET" }), []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Root>
        <Board state={state.board} onMove={handleMove} />
        <Hud player={state.player} onReset={handleReset} winner={state.winner} />
      </Root>
    </React.Fragment>
  );
}
