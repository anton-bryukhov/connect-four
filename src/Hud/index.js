import React from "react";

import reset from "./reset.svg";
import Reset from "./Reset";
import Text from "./Text";

function Hud({ player, onReset, winner }) {
  return (
    <>
      <Reset alt="reset" src={reset} onClick={onReset} />
      {winner === null ? (
        <Text>Player {player}</Text>
      ) : (
        <Text>Player {winner} wins!</Text>
      )}
    </>
  );
}

export default React.memo(Hud);
