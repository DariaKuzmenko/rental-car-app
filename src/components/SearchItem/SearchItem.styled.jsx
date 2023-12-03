import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  gap: 18px;
  margin-bottom: 50px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #00ff6a;
`;

export const SVG = styled.svg`
  fill: currentColor;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
`;

export const InputBrand = styled.input`
  padding-left: 18px;
  width: 224px;
  height: 48px;
  border: hidden;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);

  &::placeholder {
    color: #121417;
  }
`;
export const InputPrice = styled.input`
  padding-left: 18px;
  width: 125px;
  height: 48px;
  border: hidden;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);

  &::placeholder {
    color: #121417;
  }
`;
export const InputMil = styled.input`
  padding-left: 18px;
  width: 160px;
  height: 48px;
  border: hidden;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 18);

  &::placeholder {
    color: #121417;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const MileageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSearch = styled.div`
  display: flex;
  width: 136px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: #3470ff;
  color: #fff;
`;
