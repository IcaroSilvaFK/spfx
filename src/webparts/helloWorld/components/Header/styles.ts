import styled from 'styled-components';

export const Container = styled.header`
  background: #805ad5;

  font-family: 'Poppins' sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #ffff;

  padding: 20px 40px;

  nav {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      font-size: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
