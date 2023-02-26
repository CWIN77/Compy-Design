import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  a {
    text-decoration: none;
    cursor: pointer;
  }
  h1,h2,h3,h4,h5 { color: #363636; }
  h1 { font-size: 19px; }
  h2 { font-size: 16px; }
  h3 { font-size: 14px; }
  h4 { font-size: 12px; }
  h5 { font-size: 11px; }
  input {
    color: #363636;
    border: none;
    font-size: 14px;
    outline: none;
    background-color: initial;
    min-width: 0px;
    min-height: 0px;
  }
  select {
    color: #363636;
    border: none;
    font-size: 14px;
    outline: none;
    background-color: initial;
  }
  button {
    background-color: initial;
  }
`;