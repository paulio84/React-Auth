import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from '../../utils/Styles';

export const Header = styled.header`
  background-color: ${color.navbarBg};
  color: ${color.textLightest};
  padding: 1em 0;
`;

export const HeaderBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const SiteLogoLink = styled(Link)`
  font-size: 2em;
  font-weight: 700;
  &:hover {
    text-decoration: none;
  }
`;