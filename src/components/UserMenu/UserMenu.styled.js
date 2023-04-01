import styled from "styled-components";

export const LogOutBtn = styled.button`
  display: flex;
  justify-content: center;
  background: rgb(59, 79, 87);
  background: linear-gradient(
    90deg,
    rgba(59, 79, 87, 1) 13%,
    rgba(86, 96, 147, 1) 79%
  );
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
width: 60px;
height: 40px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 12px;
  margin: 0;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
  :focus {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

export const Wrapper = styled.div`
display: flex;
gap: 5px;
align-items: center;
`