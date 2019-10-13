import React from "react";

import Cell from "../Cell";

function Row({ row, onMove }) {
  return row.map((cell, cellIndex) => (
    <Cell key={cellIndex} column={cellIndex} status={cell} onMove={onMove} />
  ));
}

export default React.memo(Row);
