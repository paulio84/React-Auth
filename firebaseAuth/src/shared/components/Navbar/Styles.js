import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from '../../utils/Styles';

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${color.navbarBg};
  color: ${color.textLightest};
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

export const SiteLogoLink = styled(Link)`
  font-size: 2em;
  font-weight: 700;
  &:hover {
    text-decoration: none;
  }
`;