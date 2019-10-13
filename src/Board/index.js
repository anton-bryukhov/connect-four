import React from "react";

import Wrapper from "./Wrapper";
import Row from "./Row";

function Board({ state, onMove }) {
  return (
    <Wrapper>
      {state.map((row, rowIndex) => (
        <div key={rowIndex}>
          <Row row={row} onMove={onMove} />
        </div>
      ))}
    </Wrapper>
  );
}

export default React.memo(Board);
