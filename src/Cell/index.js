import React, { useState, useCallback, useEffect } from "react";

import Wrapper from "./Wrapper";

function Cell({ status, column, onMove }) {
  const [there, setThere] = useState(true);
  useEffect(() => {
    if (status !== 0) {
      setThere(false);
    }
  }, [status]);
  const handleClick = useCallback(() => onMove(column), [onMove, column]);

  return <Wrapper there={there} status={status} onClick={handleClick} />;
}

export default React.memo(Cell);
