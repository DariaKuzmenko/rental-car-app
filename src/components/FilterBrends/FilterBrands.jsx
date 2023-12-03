import brands from "./brands.json";

const FilterBrands = ({ onSelectBrand, onClose }) => {
  return (
    <div>
      <ul>
        {brands.map((brand) => (
          <li key={brand} onClick={() => onSelectBrand(brand)}>
            {brand}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FilterBrands;
