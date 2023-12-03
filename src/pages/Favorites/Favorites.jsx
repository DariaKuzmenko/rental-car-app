import { useSelector } from "react-redux";
import CarsCard from "../../components/CarsCard/CarsCard";
import { selectFavorites } from "../../redux/adverts/selectors";
import { Title, FavoriteList } from "./Favorites.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div>
      <Title>Favorite</Title>
      <FavoriteList>
        {favorites.length > 0 ? (
          favorites.map((data) => {
            return (
              <li key={data.id}>
                <CarsCard data={data} />
              </li>
            );
          })
        ) : (
          <Title>You haven't added you favorites cars yet </Title>
        )}
      </FavoriteList>
    </div>
  );
};

export default Favorites;
