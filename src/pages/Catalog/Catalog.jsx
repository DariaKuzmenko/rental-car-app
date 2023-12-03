import { useDispatch, useSelector } from "react-redux";
import SearchItem from "../../components/SearchItem/SearchItem";
import { useEffect, useRef, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import CarsCard from "../../components/CarsCard/CarsCard";
import { selectAdverts, selectPage } from "../../redux/adverts/selectors";
import { CardList, LoadMoreBtn } from "./Catalog.styled";

const Catalog = () => {
  const [error, setError] = useState(null);
  const isMountedRef = useRef(false);
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1");
    if (!isMountedRef.current) {
      dispatch(fetchAdverts());
      isMountedRef.current = true;
    }
  }, [dispatch]);

  const handleLoadmoreBtn = () => {
    dispatch(fetchAdverts());
  };

  return (
    <div>
      <SearchItem />
      {error && <p>Error: {error}</p>}
      <CardList>
        {adverts && adverts.length > 0 ? (
          adverts.map((data) => (
            <li key={data.id}>
              <CarsCard data={data} />
            </li>
          ))
        ) : (
          <p>No adverts available</p>
        )}
      </CardList>
      <LoadMoreBtn type="button" onClick={handleLoadmoreBtn}>
        Load More
      </LoadMoreBtn>
    </div>
  );
};

export default Catalog;
