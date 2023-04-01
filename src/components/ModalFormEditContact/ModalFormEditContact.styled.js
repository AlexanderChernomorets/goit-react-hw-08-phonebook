import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;
`

export const Title = styled.h2`
  margin-bottom: 20px;
    font-weight: 500;
    text-align: center;
    font-size: 22px;
`
export const Modal = styled.h2`
 padding: 30px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    height: 330px;
    background-color: var(--bg-color);
    border-radius: 4px;
`
export const ClsButton = styled.button`

background: rgb(59, 79, 87);
background: linear-gradient(
  90deg,
  rgba(59, 79, 87, 1) 13%,
  rgba(86, 96, 147, 1) 79%
);
border: 1px solid #000;
border-radius: 4px;
box-shadow: #fff 1px 1px 0 0, #000 1px 1px 0 1px;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-family: Arial, sans-serif;
font-size: 10px;
font-weight: 400;
width: 25px;
text-align: center;
text-transform: uppercase;
:hover {
  box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
  outline: 0;
  box-shadow: #fff 0px 0px 0 0, #000 0px 0px 0 0px;
  transform: translate(2px, 2px);
}
:focus {
  box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
  outline: 0;
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}
`;

  

  
//   .closeBtn {
//     position: absolute;
//     top: 5px;
//     right: 5px;
//   }
  
//   .form {
//     width: 100%;
//     max-width: 400px;
//     display: flex;
//     flex-direction: column;
//     margin: 0 auto;
//   }
  
//   .labelText {
//     color: inherit;
//     transition: all 200ms ease-in-out;
//   }
  
//   .labelText:hover,
//   .labelText:focus-within {
//     color: var(--accent-color);
//   }
  
//   .input {
//     width: 100%;
//     padding: 10px 20px;
//     margin-bottom: 10px;
//     margin-top: 5px;
  
//     color: inherit;
//     background-color: transparent;
//     border: 1px solid var(--border-color);
//     border-radius: 4px;
//   }
  
//   .input:hover,
//   .input:focus {
//     border-color: var(--accent-color);
//   }
  
//   .btn {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 200px;
//     height: 40px;
//     margin: 0 auto;
//     margin-top: 20px;
  
//     font-size: 18px;
//     font-weight: 500;
//     background-color: transparent;
//     border: 1px solid var(--border-color);
//     border-radius: 4px;
//     cursor: pointer;
//     color: var(--main-text-color);
  
//     transform: scale(1);
//     transition: all 200ms linear;
//   }
  
//   .btn:hover,
//   .btn:focus {
//     transform: scale(1.05);
//     color: var(--accent-color);
//     border-color: var(--accent-color);
//   }
  
//   .btn:hover .addContactIcon,
//   .btn:focus .addContactIcon {
//     color: var(--accent-color);
//   }
  
//   .addContactIcon {
//     width: 20px;
//     height: 20px;
//     margin-right: 10px;
//     color: var(--border-color);
//   }
  
