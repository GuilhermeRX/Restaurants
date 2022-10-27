import styled from 'styled-components';

export const Card = styled.div`
  max-width: 100%;
  height: fit-content;
  cursor: pointer;
  background: none;
  :hover {
    img {
      box-shadow: 4px 6px 12px rgba(0,0,0,0.4)
    }
  }

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
    border-radius: 16px;
    filter: brightness(60%);
    transition: 0.5s;
  }
`;