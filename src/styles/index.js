import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 25px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border-radius: 5px;
`;

export const DarkTheme = {
  backgroundColor: '#272727',
  color: 'white',
};

export const LightTheme = {
  backgroundColor: '#dbdbdb',
  color: '#272727',
};
