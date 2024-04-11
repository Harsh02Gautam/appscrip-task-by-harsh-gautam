import "./product-card.css";

const ProductCard = () => {
  return (
    <div className="product-card1">
      <div className="image1">
        <div className="hover-pic" />
        <img
          className="front-pic-icon1"
          loading="lazy"
          alt=""
          src="/front-pic-1@2x.png"
        />
      </div>
      <div className="rectangle-group">
        <div className="frame-child4" />
        <div className="ppxoc-milkyway-dress-in-presse-group">
          <b className="ppxoc-milkyway-dress1">
            PPXOC Milkyway dress in pressed flowers
          </b>
          <div className="explore-this-skill2">Explore this skill</div>
          <div className="frame-group">
            <div className="sign-in-or-create-an-account-t-container">
              <div className="sign-in-or-container1">
                <span className="sign-in1">Sign in</span> or Create an account
                to see pricing
              </div>
            </div>
            <img
              className="vuesaxlinearheart-icon2"
              loading="lazy"
              alt=""
              src="/vuesaxlinearheart-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
