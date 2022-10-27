import styled from 'styled-components';


export const HeaderStyle = styled.header`
  background-image: url('/banner.jpg');
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-clip:border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 46px;
  flex-direction: column;

  span {
    margin-top: 36px;
    margin-bottom: 66px;
    align-self: flex-end;
    align-items: flex-end;
    margin-right: 66px;
    display: flex;
    flex-direction: column;

    h1 {
      color: #fff;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      color: #fff;
      font-weight: 100;
      text-align: end;
      width: 200px;
      margin-left: 180px;
    }

    @media screen and (max-width: 480px) {
      margin-bottom: 24px;
      margin-left: 0;
      margin-right: 24px;
      h1 {
        font-size: 18px;
      }

      p {
        margin-left: 0;
      }
  }
  }

  section{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  
      input {
        width: 90%;
        padding: 14px 0;
        border-radius: 0 8px 8px 0;
        outline: none;
        border: none;
      }
    }
  
    button {
      padding: 14px 24px;
      border-radius: 8px;
      margin-left: 16px;
      background-color: rgb(221, 79, 80);
      color: #fff;
      font-weight: 700;
      cursor: pointer;
  
    }

  }

  @media screen and (max-width: 480px) {
    section {
      flex-direction: column;
      label {
        width: 60%;
  
        input {
          padding: 14px 16px;
        }
      }
  
      button {
        margin: none;
        margin-top: 16px;
      }

    }
  }

`;

export const SvgContainer = styled.div`
  display: flex;
  background-color: #fff;
  width: 8%;
  min-width: 32px;
  height: 43px;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;

   svg {
     color: rgb(221, 79, 80);
    }
  
    @media screen and (max-width: 480px) {
    width: 20%;
  }
`;