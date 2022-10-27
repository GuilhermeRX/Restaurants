import styled from "styled-components";

export const PageInternal = styled.div`
  width: 100%;
  margin-bottom: 36px;
`

export const HeaderInternal = styled.header`
  background-image: url('/banner.jpg');
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  margin-bottom: 46px;
  filter: brightness(90%);
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    div {
      display: flex;
      flex-direction: column;

      h1 {
        color: #fff;
        margin-bottom: 16px;
      }

      p {
        color: #fff;
        font-weight: 100;
      }
    }
  }

  @media screen and (max-width: 480px) {
    span {
      flex-direction: column;
    }
  }

`

export const ContainerImg = styled.div`
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #fff;
  }

`;


export const InfoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  

 span {
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(143,143,143,0.8)
 }

 div {
  margin-top: 36px;
 }

`;

export const SectionText = styled.section`
  margin-bottom: 16px;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    color: rgba(143,143,143)
  }
`;

export const BtnBack = styled.button`
  position: absolute;
  top: 36px;
  left: 36px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

`