import styled from 'styled-components';

export const color = {
  textLightest: '#F8F8FF',
  textDarkest: '#333',
  navbarBg: '#4682B4'
};

export const NavLinks = styled.ul`
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const NavLinksItem = styled.li`
  margin-left: 1em;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1em;
`;
