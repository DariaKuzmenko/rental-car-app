import styled from "styled-components";

export const CardItem = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  gap: 28px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  gap: 14px;
`;

export const FavoriteImgWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const IconBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.2);
  }
`;

export const PrimaryList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListText = styled.li`
  display: flex;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
  span {
    margin-right: 5px;
    &:nth-child(2) {
      color: #3470ff;
    }
  }
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
`;
export const SecondText = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;
  white-space: nowrap;
  &:last-child {
    border-right: none;
  }
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  border-radius: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  background-color: #3470ff;
  color: #fff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
