import "./pattern-detector.css";

const PatternDetector = ({ vuesaxlineararrowLeft1 }) => {
  return (
    <div className="main-navigation">
      <header className="header">
        <div className="error-handler">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
        </div>
        <img className="india-in-icon" alt="" src="/india-in.svg" />
        <img className="header-child" alt="" src="/star-1.svg" />
        <div className="icons">
          <img
            className="vuesaxlinearsearch-normal-icon"
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
          <img
            className="vuesaxlinearsearch-normal-icon1"
            alt=""
            src="/vuesaxlinearsearchnormal1.svg"
          />
          <div className="language">
            <img className="india-in-icon1" alt="" src="/india-in1.svg" />
            <img className="language-child" alt="" src="/star-1.svg" />
            <b className="eng">ENG</b>
            <img
              className="vuesaxlineararrow-left-icon8"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
        <div className="link-connector">
          <div className="image-recognizer">
            <div className="shape-extractor">
              <h1 className="logo">LOGO</h1>
              <div className="data-merger">
                <div className="vuesaxlinearsearch-normal-parent">
                  <img
                    className="vuesaxlinearsearch-normal-icon2"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearsearchnormal1.svg"
                  />
                  <img
                    className="vuesaxlinearheart-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="sequence-processor">
              <div className="tabs">
                <div className="tab-1-parent">
                  <div className="tab-1">
                    <b className="shop">SHOP</b>
                  </div>
                  <div className="frame-child2" />
                </div>
                <div className="tab-2-parent">
                  <div className="tab-2">
                    <b className="skills">SKILLS</b>
                  </div>
                  <div className="frame-child3" />
                </div>
                <div className="tab-3">
                  <b className="stories">STORIES</b>
                  <div className="tab-3-child" />
                </div>
                <div className="tab-4">
                  <b className="about">ABOUT</b>
                  <div className="tab-4-child" />
                </div>
                <div className="tab-5">
                  <b className="contact-us">CONTACT US</b>
                  <div className="tab-5-child" />
                </div>
              </div>
            </div>
          </div>
          <div className="size-comparator">
            <img
              className="vuesaxlinearshopping-bag-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlinearshoppingbag.svg"
            />
          </div>
          <div className="input-field">
            <img
              className="vuesaxtwotoneprofile-icon"
              loading="lazy"
              alt=""
              src="/vuesaxtwotoneprofile.svg"
            />
          </div>
          <div className="input-collector">
            <div className="output-distributor">
              <div className="value-comparer">
                <b className="eng1">ENG</b>
              </div>
              <img
                className="vuesaxlineararrow-left-icon9"
                alt=""
                src={vuesaxlineararrowLeft1}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PatternDetector;
