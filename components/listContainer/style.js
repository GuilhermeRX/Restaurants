import styled from 'styled-components';

export const ListContainerStyle = styled.main`
  display: flex;
  width: 60%;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
  margin-bottom: 46px;

  span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 70%;
    span {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;

export const DivButtons = styled.div`
  margin-top: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0 16px;
    background-color: rgba(144, 143, 143,0.2);
    opacity: 0.4;
    padding: 4px 12px;
    border-radius: 8px;
  }

  button {
    padding: 8px 12px;
    background-color: rgb(221, 79, 80);
    color: #fff;
    font-weight: 800;
    border-radius: 8px;
  }
`;

export const ResultSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 36px;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 8px;
    }

    p {
      color: rgba(144, 143, 143,0.8);
      margin-bottom: 8px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: none;
      font-weight: 100;
      color: rgba(144, 143, 143,0.8);

      svg {
        color: rgb(221, 79, 80);
        margin-left: 8px;
        font-size: 22px;
      }
    }
  }

`;