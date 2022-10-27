import styled from 'styled-components';

export const Card = styled.div`
  max-width: 100%;
  height: fit-content;
  cursor: pointer;
  
  p {
    margin-top: -26px;
    margin-left: 8px;
    color: #fff;
    position: absolute;
    font-weight: 800;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    height: 160px;
    border-radius: 12px;
    filter: brightness(60%);    
  }
`;