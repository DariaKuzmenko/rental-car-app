import React, { useState } from "react";
import sprite from "../../images/sprite.svg";
import FilterBrands from "../FilterBrends/FilterBrands";
import {
  ButtonSearch,
  CloseBtn,
  FormWrapper,
  InputBrand,
  InputMil,
  InputPrice,
  InputWrapper,
  Label,
  MileageWrapper,
  SVG,
} from "./SearchItem.styled";

const SearchItem = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleBrandSelect = (selectedBrand) => {
    setInputValue(selectedBrand);
    setIsOpen(false);
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <Label htmlFor="brand">Car brand</Label>
        <InputBrand
          type="text"
          placeholder="Enter the text"
          id="brand"
          name="brand"
          value={inputValue}
          readOnly
        />
        <CloseBtn onClick={() => setIsOpen(!isOpen)}>
          <SVG width="12" height="12">
            <use href={`${sprite}#arrow`}></use>
          </SVG>
        </CloseBtn>
        {isOpen && (
          <FilterBrands
            onClose={() => setIsOpen(false)}
            onSelectBrand={handleBrandSelect}
          />
        )}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <InputPrice type="text" placeholder="To $" id="price" name="price" />
        <CloseBtn>
          <svg width="12" height="12">
            <use href={`${sprite}#arrow`}></use>
          </svg>
        </CloseBtn>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="mileage">Сar mileage / km</Label>
        <MileageWrapper>
          {" "}
          <InputMil
            type="number"
            placeholder="From"
            id="mileageFrom"
            name="mileageFrom"
          />
          <InputMil
            type="number"
            placeholder="To"
            id="mileageTo"
            name="mileageTo"
          />
        </MileageWrapper>
      </InputWrapper>

      <ButtonSearch type="button">Search</ButtonSearch>
    </FormWrapper>
  );
};

export default SearchItem;
