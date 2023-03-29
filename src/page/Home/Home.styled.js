import styled from 'styled-components';

export const HomeWrapper = styled.div`
  /* position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 54px); */
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid grey;
    border-radius: 5px;
    margin: 1px 20px;
    width: 350px;
    padding: 10px 40px;
    background-color: whitesmoke;
`;

export const TitleBox = styled.div`
  text-align: center;
`;

export const TextBox = styled.div`
    display: flex;
    justify-content: space-around;
`;



export const Text = styled.p`
       display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    margin: 0px;
    color: rgb(52, 52, 52);
    padding: 40px 0;
    font-weight: normal;
    font-size: 36px;
    line-height: 35px;
    font-family: Orienta, sans-serif;
`;

export const Tittle = styled.h1`
     margin: 10px;
    display: block;
    color: rgb(52, 52, 52);
    font-weight: 800;
    font-family: Ultra, sans-serif;
    font-size: 47px;
    line-height: 42px;
    text-transform: uppercase;
    text-shadow: white 0px 2px, rgb(119, 119, 119) 0px 3px;
`;

