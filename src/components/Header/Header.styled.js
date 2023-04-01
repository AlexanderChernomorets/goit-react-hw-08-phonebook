import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid grey;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 10px;
  width: 70%;
  padding: 10px 40px;
  background-color: whitesmoke;
`;

export const Title = styled.h2`
  margin: 10px;
  display: flex;
  justify-content: center;
  color: rgb(52, 52, 52);
  font-family: Ultra, sans-serif;
  font-size: 30px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
