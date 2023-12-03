import { RotatingLines } from "react-loader-spinner";

const loader = document.querySelector("#loader-root");

const Loader = () => {
  return (
    (
      <div className="LoaderWr">
        <div className="LoaderWrCon">
          <RotatingLines
            strokeColor="#407BFF"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      </div>
    ),
    loader
  );
};
export default Loader;
