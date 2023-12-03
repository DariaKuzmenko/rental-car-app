import styled from "styled-components";

export const BackdropWrrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 99;
`;

export const ModalWrrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 24px;
  background-color: #fff;
  max-width: 541px;
`;

export const Svg = styled.svg`
  fill: black;
  stroke: black;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Img = styled.img`
  width: 460px;
  height: 248px;
  margin-bottom: 14px;

  border-radius: 14px;
  background-color: rgb(143, 143, 143);

  background-position: center;
  background-size: cover;
  background-repeat: repeat;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  span {
    margin-right: 5px;
    &:nth-child(2) {
      color: #3470ff;
    }
  }
`;

export const TextDescription = styled.p`
  max-width: 461px;
  margin-top: 14px;
  margin-bottom: 24px;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const SecondWrapper = styled.div`
  display: flex;
  max-width: 461px;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const SecondList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 4px;
  &:first-child {
    li:nth-last-child(-n + 2) {
      color: #3470ff;
    }
  }
`;

export const SecondItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;
  &:last-child {
    border-right: none;
  }
`;

export const ButtonRental = styled.button`
  width: 168px;
  height: 44px;
  background-color: #3470ff;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
