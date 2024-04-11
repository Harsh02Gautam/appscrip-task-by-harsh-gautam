import { useMemo } from "react";
import "./frame-component.css";

const FrameComponent = ({ vuesaxlinearheart, propAlignSelf, propWidth }) => {
  const productNameStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="product-name-parent">
      <b className="product-name1" style={productNameStyle}>
        Product Name
      </b>
      <div className="frame-parent2">
        <div className="sign-in-or-create-an-account-t-frame">
          <div className="sign-in-or-container3">
            <span className="sign-in3">Sign in</span> or Create an account to
            see pricing
          </div>
        </div>
        <img
          className="vuesaxlinearheart-icon4"
          loading="lazy"
          alt=""
          src={vuesaxlinearheart}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
