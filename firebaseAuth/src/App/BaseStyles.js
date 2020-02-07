import { createGlobalStyle } from 'styled-components';

import { color } from '../shared/utils/Styles';

export default createGlobalStyle`
  body {
    font-family: sans-serif;
  }

  a, a:visited, a:active, a:link {
    color: ${color.textLightest};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;