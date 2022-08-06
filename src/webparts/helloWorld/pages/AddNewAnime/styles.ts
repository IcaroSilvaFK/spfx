import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 60%;

  margin: 30px auto;

  gap: 10px;

  button {
    background: #805ad5;

    color: #fff;

    padding: 8px 16px;

    font-size: 1rem;

    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 3px;

    border-radius: 5px;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Row = styled.div`
  border: 1px solid #4a5568;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;

  border-radius: 4px;

  input {
    flex: 1;
    font-size: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 1rem;
    }
  }

  input[type='file'] {
    display: none;
  }

  img {
    width: 64px;

    border-radius: 5px;
    object-fit: cover;
  }
`;

export const ContainerTextArea = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;

  border: 1px solid #4a5568;
  border-radius: 5px;

  padding: 6px;

  textarea {
    border: 0;
    resize: none;

    outline: 0;

    width: 100%;
    height: 150px;

    font-size: 1rem;

    padding: 5px;
  }
`;
