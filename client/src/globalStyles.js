/* https://paletasdecolores.com/paleta-de-colores-2279/ */

import { createGlobalStyle, } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --mainClr: #007BFF;
    --altClr: #1544c0;
    --lightClr: #F4F3F1;
    --darkClr: #5e6072;
    --ctaInvClr: #5210ac;
    --ctaClr: #f86449;

    --greenClr: #78be20;
    --lightBlueClr: #00bfb3;
    --yellowClr: #fbe10f;
    --blueClr: #1544c0;
    --purpleClr: #5210ac;
    --orangeClr: #f86449;


    /* other variables  */
    --header-height: 80px;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--lightClr);
    color: var(--darkclr);
    font-family: 'Encode Sans Expanded', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  .title {
    position: relative;
      margin-bottom: 2rem;

    font-family: 'Bad Script', cursive;
    font-size: 2rem;
    
    color: var(--blueClr);
    text-align: center;

    &:after {
      content: '';
      height:3px;
      width: 5rem;
      background-color: var(--blueClr);

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }

  .error {
    padding: .75rem;
    margin: .75rem 0;
    background-color: rgba(255, 0, 0, 0.658);
    color: white;
    font-size: bolder;
  }

  input {
    display: block;
    height: 45px;
    width: 100%;
    margin: 15px 0;
    border: none;
    padding: 10px;
    font-size: 20px;
    box-shadow: 2px 2px 2px rgba(0,0,0,.6)
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  background: #c4c4c4;  
}

tr:nth-child(even) {
  background: #d1d1d1;
}

.flex, 
.list-group {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ;
  text-align: center;
}

.tabla {
  margin: 2rem auto;
  font-size: 1.5rem
}
.container {
  width: 100%;
  border: 2px solid green;
  display:flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  height: 200px;
  border: 2px solid green;
  background-color: var(--blueClr);
  display:flex;
  justify-content: center;
  align-items: center;

  .tarjeta {
    padding : 2rem;
    font-size: 1.5rem;
    width: 100%;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
  }

  button {
    display: block;
    background-color: yellow;
  }
}

.lado-derecho {
  width: 500px;
  height:500px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;


}
.row {
  background-color: var(--orangeClr);
  color: white;
  /* width: 100%; */
  display:flex;
  justify-content: center;
  align-items: center;
}
`;

// export const Button = styled.button`

//   background-color: ${({primary}) => (primary ? 'var(--ctaClr)' : 'var(--ctaInvClr)')};
//   color: var(--lightClr);
//   white-space: nowrap;
//   padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
//   cursor: pointer;

//   margin-bottom: 10rem;

//   border: none;
//   outline: none;

//   &:hover {
//     background-color: ${({primary}) => (primary ? 'var(--ctaInvClr)' : 'var(--ctaClr)')};
//     transition: all .5s ease;
//   }
// `;
