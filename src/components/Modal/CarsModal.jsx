import { useEffect } from "react";
import { SecondList, SecondText } from "../CarsCard/CarsCard.styled";
import {
  BackdropWrrap,
  ModalWrrap,
  Img,
  CloseBtn,
  Text,
  TextWrapper,
  TextDescription,
  SecondWrapper,
  Title,
  SecondItem,
  ButtonRental,
} from "./CarsModal.styled";
import { AiOutlineClose } from "react-icons/ai";

const CarsModal = ({ data, onClose }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
    functionalities,
    description,
  } = data;

  // const newArray = address.split(",");
  // const country = newArray.slice(-1).join(",").trim();
  // const city = newArray[newArray.length - 2].trim();
  const rentalConditionsSplitted = rentalConditions.split("\n");
  const minimumAge = rentalConditionsSplitted[0].slice(-2);
  const finalConditions = rentalConditionsSplitted.slice(1);
  const stringedMileage = mileage.toString();
  const formattedMileage =
    stringedMileage.slice(0, 1) + "," + stringedMileage.slice(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleBtnRental = () => {
    window.open("tel:+38066000000");
    onClose();
  };

  return (
    <BackdropWrrap onClick={handleBackdropClick}>
      <ModalWrrap>
        <CloseBtn onClick={onClose}>
          <AiOutlineClose size={24} />
        </CloseBtn>
        <div>
          <Img src={img} alt={`${make} ${model}`} />
        </div>
        <TextWrapper>
          <Text>
            <span>{make} </span>
            {model && <span>{model},</span>}
            <span>{year}</span>
          </Text>
        </TextWrapper>

        <SecondList>
          <SecondText>{address.city}</SecondText>
          <SecondText>{address.country}</SecondText>
          <SecondText>{rentalCompany}</SecondText>
          <SecondText>{type}</SecondText>
          <SecondText>{id}</SecondText>
          <SecondText>{accessories[0]}</SecondText>
        </SecondList>

        <TextDescription>{description}</TextDescription>
        <SecondWrapper>
          <Title>Accessories and functionalities:</Title>
          <SecondList>
            {accessories.map((accessory, index) => (
              <SecondItem key={index}>{accessory}</SecondItem>
            ))}
            {functionalities.map((functionality, index) => (
              <SecondItem key={index}>{functionality}</SecondItem>
            ))}
          </SecondList>
        </SecondWrapper>
        <SecondWrapper>
          <Title>Rental Conditions:</Title>
          <SecondList>
            <SecondItem>
              Minimum age: <span>{minimumAge}</span>
            </SecondItem>
            {finalConditions.map((rentalConditions, index) => (
              <SecondItem key={index}>{rentalConditions}</SecondItem>
            ))}
            <SecondItem>
              Mileage: <span>{formattedMileage}</span>
            </SecondItem>
            <SecondItem>
              Price: <span>{rentalPrice}</span>
            </SecondItem>
          </SecondList>
        </SecondWrapper>
        <ButtonRental onClick={handleBtnRental}>Rental Car</ButtonRental>
      </ModalWrrap>
    </BackdropWrrap>
  );
};

export default CarsModal;
