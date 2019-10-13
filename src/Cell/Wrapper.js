import React from 'react';
import styled from "styled-components";

export default React.memo(styled.div`
  display: inline-block;
  background-color: ${props =>
    ({
      0: "#fafafa",
      1: "#e53935",
      2: "#fb8c00"
    }[props.status])};
  border-radius: 32px;
  box-shadow: inset 2px ${props => (props.status === 0 ? "6px 6px" : "4px 4px")}
    rgba(64, 64, 64, 0.35);
  margin: 8px;
  height: 64px;
  width: 64px;
  
  opacity: 1;
  transition: all .25s ease-out;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`);
