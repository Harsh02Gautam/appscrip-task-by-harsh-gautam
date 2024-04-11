import "./product-card1.css";

const ProductCard1 = () => {
  return (
    <div className="product-card">
      <div className="image">
        <img className="hover-pic-icon" alt="" src="/hover-pic@2x.png" />
        <img
          className="front-pic-icon"
          loading="lazy"
          alt=""
          src="/front-pic@2x.png"
        />
      </div>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <div className="ppxoc-milkyway-dress-in-presse-parent">
          <b className="ppxoc-milkyway-dress">
            PPXOC Milkyway dress in pressed flowers
          </b>
          <div className="explore-this-skill1">Explore this skill</div>
          <div className="frame-parent">
            <div className="sign-in-or-create-an-account-t-wrapper">
              <div className="sign-in-or-container">
                <span className="sign-in">Sign in</span> or Create an account to
                see pricing
              </div>
            </div>
            <img
              className="vuesaxlinearheart-icon1"
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

export default ProductCard1;
