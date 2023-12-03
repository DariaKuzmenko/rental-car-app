import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/adverts/selectors";
import {
  addFavorites,
  deleteFavorites,
} from "../../redux/adverts/advertsSlice";
import CarsModal from "../Modal/CarsModal";
import {
  CardItem,
  FavoriteImgWrap,
  IconBtn,
  LearnMoreBtn,
  ListText,
  PrimaryList,
  SecondList,
  SecondText,
  StyledImg,
  StyledWrapper,
} from "./CarsCard.styled";
import { FiHeart } from "react-icons/fi";

const CarsCard = ({ data }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    address,
    rentalCompany,
  } = data;
  const newArray = address.split(",");
  const country = newArray.slice(-1).join(",").trim();
  const city = newArray[newArray.length - 2].trim();

  const [isModalOpen, setIsOpenModal] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpenModal(!isModalOpen);
  };

  const isFavoriteCheck = () => {
    if (favorites.some((item) => item.id === id)) {
      return true;
    }
    return false;
  };

  const handleFavoriteCar = () => {
    if (isFavoriteCheck()) {
      dispatch(deleteFavorites(id));
      return;
    }
    dispatch(addFavorites(data));
  };

  return (
    <CardItem>
      <StyledWrapper>
        <FavoriteImgWrap>
          <StyledImg src={img} alt={`${make}${model}`} />
          <IconBtn type="button" onClick={handleFavoriteCar}>
            <FiHeart
              size={24}
              style={{ color: isFavoriteCheck() ? "blue" : "black" }}
            />
          </IconBtn>
        </FavoriteImgWrap>
        <PrimaryList>
          <ListText>
            <span>{make} </span>
            {model && <span>{model},</span>}
            <span>{year}</span>
          </ListText>
          <ListText>{rentalPrice}</ListText>
        </PrimaryList>
        <SecondList>
          <SecondText>{city}</SecondText>
          <SecondText>{country}</SecondText>
          <SecondText>{rentalCompany}</SecondText>
          <SecondText>{type}</SecondText>
          <SecondText>{id}</SecondText>
          <SecondText>{accessories[0]}</SecondText>
        </SecondList>
        <LearnMoreBtn type="button" onClick={toggleModal}>
          Learn more
        </LearnMoreBtn>
        {isModalOpen && <CarsModal data={data} onClose={toggleModal} />}
      </StyledWrapper>
    </CardItem>
  );
};

export default CarsCard;
