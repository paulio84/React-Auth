import styled from 'styled-components';

export const MessageContainer = styled.li`
  list-style-type: none;
`;

export const MessageQuote = styled.blockquote`
  color: #696969;
  font-family: 'sanchez';
  font-size: 2rem;
  margin: 2em 0;
  padding-left: 2em;
  position: relative;

  :before {
    content: '\\201C';
    color: #789;
    font-size: 4em;
    font-style: italic;
    font-weight: 700;
    left: 20px;
    opacity: 0.2;
    position: absolute;
    top: -40px;
  }
`;

export const MessageFooter = styled.footer`
  color: #696969;
  font-size: 1rem;
  position: absolute;
  right: 100px;
  
  :before {
    content: '\\2015';
    margin-right: 5px;
  }
`;
