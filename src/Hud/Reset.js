import styled from "styled-components";

export default styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 16px;
  left: 16px;
  opacity: 1;
  transition: opacity .25s ease-out;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
