import "./slider.css";

const Slider = ({ hero }) => {
  return (
    <div className="container">
      <div className="slider-wrapper">
        <div className="image-list">
          {hero.map((e, i) => (
            <img src={e.url} alt={e.alt} className="image-item" key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
