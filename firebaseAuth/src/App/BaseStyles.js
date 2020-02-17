import { createGlobalStyle } from 'styled-components';

import { color } from '../shared/utils/Styles';

export default createGlobalStyle`
  body {
    font-family: sans-serif;
  }

  a {
    color: ${color.textLightest};
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  label {
    text-transform: capitalize; 
  }

  ul {
    margin: 0;
    padding-left: 0;
  }
`;