import ico from "../../assets/images/loader.png";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center">
      <img src={ico} alt="icon" className="object-center w-72" />
    </div>
  );
};

export default Loader;
