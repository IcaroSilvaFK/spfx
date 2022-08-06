import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h3 {
    padding: 20px 0;
  }

  .container__details {
    max-width: 400px;
    margin: 0 auto;

    p {
      color: #4a5568;

      padding: 0 0 20px;
      font-weight: 400;
    }
  }

  div {
    img {
      max-width: 400px;
      object-fit: cover;
    }
  }
`;

export const Separator = styled.div`
  width: 300px;
  height: 1px;

  background: #a0aec0;

  margin: 20px auto;
`;
