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
