import { createGlobalStyle } from 'styled-components';

import { color } from '../shared/utils/Styles';

export default createGlobalStyle`
  body {
    font-family: sans-serif;
  }

  a {
    color: ${color.textLightest};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;